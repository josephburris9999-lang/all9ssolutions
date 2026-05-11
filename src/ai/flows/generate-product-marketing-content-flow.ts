'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating optimized marketing content.
 *
 * - generateProductMarketingContent - A function that generates marketing content for a product or service.
 * - GenerateProductMarketingContentInput - The input type for the generateProductMarketingContent function.
 * - GenerateProductMarketingContentOutput - The return type for the generateProductMarketingContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductMarketingContentInputSchema = z.object({
  productName: z.string().describe('The name of the product or service.'),
  productDescription:
    z.string().describe('A detailed description of the product or service, including its purpose, features, and benefits.'),
  targetAudience:
    z.string().optional().describe('The intended audience for the product or service (e.g., enterprise businesses, small startups, individual consumers).'),
  keyFeatures:
    z.array(z.string()).optional().describe('A list of key features or benefits of the product or service.'),
});
export type GenerateProductMarketingContentInput = z.infer<typeof GenerateProductMarketingContentInputSchema>;

const GenerateProductMarketingContentOutputSchema = z.object({
  metaDescription:
    z.string().describe('An optimized meta description (150-160 characters) for the product or service, designed for search engines.'),
  seoKeywords:
    z.array(z.string()).describe('A list of highly relevant SEO keywords (5-10) for the product or service.'),
  copySuggestions:
    z.array(z.string()).describe('A list of persuasive copy suggestions (3-5) for the product or service, suitable for a landing page.'),
});
export type GenerateProductMarketingContentOutput = z.infer<typeof GenerateProductMarketingContentOutputSchema>;

export async function generateProductMarketingContent(
  input: GenerateProductMarketingContentInput
): Promise<GenerateProductMarketingContentOutput> {
  return generateProductMarketingContentFlow(input);
}

const generateProductMarketingContentPrompt = ai.definePrompt({
  name: 'generateProductMarketingContentPrompt',
  input: {schema: GenerateProductMarketingContentInputSchema},
  output: {schema: GenerateProductMarketingContentOutputSchema},
  prompt: `You are an expert marketing content creator specializing in optimizing product and service descriptions for enterprise solutions. Your goal is to generate compelling meta descriptions, relevant SEO keywords, and persuasive copy suggestions based on the provided product/service information.

Product/Service Name: {{{productName}}}
Product/Service Description: {{{productDescription}}}
{{#if targetAudience}}Target Audience: {{{targetAudience}}}.{{/if}}
{{#if keyFeatures}}Key Features/Benefits:
{{#each keyFeatures}}- {{{this}}}
{{/each}}{{/if}}

Please generate the following:
1.  **Meta Description**: A concise, impactful meta description (150-160 characters) that encourages clicks and accurately summarizes the product/service for search engines.
2.  **SEO Keywords**: A list of 5-10 highly relevant SEO keywords that target the intended audience and product/service. Focus on terms enterprise businesses would use when searching.
3.  **Copy Suggestions**: 3-5 persuasive copy suggestions designed for a landing page, focusing on the unique value proposition and benefits for enterprise businesses. Each suggestion should be a standalone sentence or short paragraph.`,
});

const generateProductMarketingContentFlow = ai.defineFlow(
  {
    name: 'generateProductMarketingContentFlow',
    inputSchema: GenerateProductMarketingContentInputSchema,
    outputSchema: GenerateProductMarketingContentOutputSchema,
  },
  async input => {
    const {output} = await generateProductMarketingContentPrompt(input);
    return output!;
  }
);
