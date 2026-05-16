<?php
/**
 * Consultation form mail handler.
 *
 * Deploy on a host where PHP executes (e.g. Apache + mod_php or PHP-FPM).
 * Copy this file to a URL reachable by the site (often public/php/ on the server)
 * and set NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT in your Next build to that URL.
 *
 * Server environment (Apache SetEnv, php-fpm pool, etc.):
 *   CONSULTATION_MAIL_TO    — recipient inbox (default: hello@all9ssolutions.com)
 *   CONSULTATION_MAIL_FROM  — From: address on your domain (default: noreply@all9ssolutions.com)
 *
 * Requires a working mail() transport (sendmail/postfix) or replace mail() with SMTP (e.g. PHPMailer).
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
} else {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

function strip_crlf(string $s): string
{
    return str_replace(["\r", "\n", "\x0d", "\x0a"], '', $s);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw !== false && $raw !== '' ? $raw : '[]', true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name = isset($data['name']) ? strip_crlf(trim((string) $data['name'])) : '';
$email = isset($data['email']) ? strip_crlf(trim((string) $data['email'])) : '';
$company = isset($data['company']) ? strip_crlf(trim((string) $data['company'])) : '';
$message = isset($data['message']) ? trim((string) $data['message']) : '';

if (strlen($name) < 2) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Full name is required']);
    exit;
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Valid email is required']);
    exit;
}
if (strlen($company) > 200) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Company is too long']);
    exit;
}
if (strlen($message) < 10) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Message is too short']);
    exit;
}
if (strlen($message) > 10000) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Message is too long']);
    exit;
}

$to = getenv('CONSULTATION_MAIL_TO') ?: 'hello@all9ssolutions.com';
$to = strip_crlf($to);
$from = getenv('CONSULTATION_MAIL_FROM') ?: 'noreply@all9ssolutions.com';
$from = strip_crlf($from);

$subjectLine = 'Strategy consultation: ' . (function_exists('mb_substr')
    ? mb_substr($name, 0, 120, 'UTF-8')
    : substr($name, 0, 120));
$subjectEncoded = '=?UTF-8?B?' . base64_encode($subjectLine) . '?=';

$body = "Consultation request (website form)\r\n\r\n";
$body .= 'Name: ' . $name . "\r\n";
$body .= 'Email: ' . $email . "\r\n";
$body .= 'Company: ' . ($company !== '' ? $company : '(not provided)') . "\r\n\r\n";
$body .= "Message:\r\n" . str_replace(["\r\n", "\r"], "\n", $message) . "\r\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . $from,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = @mail($to, $subjectEncoded, $body, implode("\r\n", $headers));
if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail could not be sent. Check server mail configuration.']);
    exit;
}

echo json_encode(['ok' => true]);
