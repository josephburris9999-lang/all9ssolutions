import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | all9s Solutions',
  description:
    'Terms governing use of the all9s Solutions website, services, intellectual property, liability, and related policies.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-background px-[1.25rem] pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="absolute top-0 left-1/2 z-[1] h-[1px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Effective Date:</strong> May 13, 2026
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Agreement to Terms</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Welcome to all9s Solutions (“Company,” “we,” “our,” or “us”).
            </p>
            <p className="max-w-2xl text-lg text-muted-foreground">
              By accessing or using this website, services, communications, or related platforms operated by all9s Solutions,
              you agree to comply with and be bound by these Terms of Service (“Terms”).
            </p>
            <p className="max-w-2xl text-lg text-muted-foreground">
              If you do not agree to these Terms, you should discontinue use of this website and related services.
            </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Services</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            all9s Solutions provides technology-related services which may include but are not limited to:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Custom Software Development</li>
            <li>Web Development</li>
            <li>Technology Consulting</li>
            <li>Database Solutions</li>
            <li>Business Automation</li>
            <li>Digital Transformation Services</li>
          </ul>
          <p className="max-w-2xl text-lg text-muted-foreground">
            All services are subject to availability and may be modified or discontinued at any time without notice.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Use of Website</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            You agree to use this website only for lawful purposes and in a manner that does not:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>violate applicable laws or regulations,</li>
            <li>interfere with website operation,</li>
            <li>attempt unauthorized access to systems or data,</li>
            <li>distribute malicious code or harmful materials,</li>
            <li>or misuse website content or communications systems.</li>
          </ul>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Unauthorized or improper use may result in restricted access or legal action.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Intellectual Property</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            All website content, branding, graphics, designs, logos, code, and related materials are the property
            of all9s Solutions unless otherwise stated.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            You may not:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>reproduce,</li>
            <li>distribute,</li>
            <li>modify,</li>
            <li>republish,</li>
            <li>or commercially exploit any material without prior written permission.</li>
          </ul>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Limited personal and non-commercial viewing of website materials is permitted.
          </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Client Projects and Deliverables</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Specific project terms, deliverables, timelines, pricing, ownership rights, and support obligations are
            may be governed by separate written agreements, proposals, contracts, or statements of work between all9s Solutions and its clients.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            In the event of a conflict between these Terms and a separate signed agreement, the signed agreement shall control.
          </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Payments and Fees</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Fees for services are communicated separately through proposals, invoices, contracts, or project agreements.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Clients agree to provide timely payment according to agreed payment terms.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Late payments may result in:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>suspension of services,</li>
            <li>delayed delivery,</li>
            <li>or additional fees where permitted by law.</li>
          </ul>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Third-Party Services</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Projects or services may involve third-party providers, software platforms, APIs, hosting providers, or external services.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            all9s Solutions is not responsible for:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>outages,</li>
            <li>interruptions,</li>
            <li>pricing changes,</li>
            <li>security incidents,</li>
            <li>or functionality issues caused by third-party providers.</li>
          </ul>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Use of third-party services may also be subject to separate third-party terms and policies.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Disclaimer of Warranties</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            This website and all services are provided on an “as is” and “as available” basis without warranties of any kind, express or implied.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            all9s Solutions does not guarantee:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>uninterrupted website operation,</li>
            <li>error-free functionality,</li>
            <li>specific business outcomes,</li>
            <li>or compatibility with every environment or platform.</li>
          </ul>
          <p className="max-w-2xl text-lg text-muted-foreground">
            To the maximum extent permitted by law, all implied warranties, including merchantability and fitness for a particular purpose, are disclaimed.
          </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Limitation of Liability</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            To the fullest extent permitted by law, all9s Solutions shall not be liable for:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>your misuse of the website,</li>
            <li>violation of these Terms,</li>
            <li>consequential damages,</li>
            <li>or infringement of any rights of another party.</li>
          </ul>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Indemnification</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            You agree to defend, indemnify, and hold harmless all9s Solutions from claims, liabilities, damages, expenses, and costs arising from:
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Updated versions will be posted on this page with a revised effective date.
          </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Privacy</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Use of this website is also governed by our Privacy Policy.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            By using this website, you acknowledge and agree to the collection and use of information as described in the Privacy Policy.
          </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Modifications to Terms</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            all9s Solutions reserves the right to modify or update these Terms at any time.
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Updated versions will be posted on this page with a revised effective date. Continued use of the website
            or services after updates constitutes acceptance of the revised Terms.
          </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Governing Law</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            These Terms shall be governed by and interpreted in accordance with the laws of the State of Missouri, without regard to conflict of law principles.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Contact Information</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
          If you have questions regarding these Terms of Service, please contact:
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Email:{' '}
            <a
              href="mailto:hello@all9ssolutions.com"
              className="text-primary transition-colors hover:underline"
            >
              hello@all9ssolutions.com
            </a>
          </p>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Website:{' '}
            <a
              href="https://all9ssolutions.com"
              className="text-primary transition-colors hover:underline"
              rel="noopener noreferrer"
            >
              https://all9ssolutions.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
