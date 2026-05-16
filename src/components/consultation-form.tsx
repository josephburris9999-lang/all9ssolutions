"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, Send } from 'lucide-react';

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Full name is required')
    .min(2, 'Please enter at least 2 characters for your name'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Enter a valid email address'),
  company: z.string().trim().max(200),
  message: z
    .string()
    .trim()
    .min(1, 'How can we help? is required')
    .min(10, 'Please provide a bit more detail (at least 10 characters)'),
});

const consultationFormEndpoint =
  process.env.NEXT_PUBLIC_CONSULTATION_FORM_ENDPOINT ?? '/php/send-consultation.php';

export function ConsultationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch(consultationFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      let payload: { ok?: boolean; error?: string } = {};
      try {
        payload = (await res.json()) as typeof payload;
      } catch {
        // non-JSON response
      }

      if (!res.ok || !payload.ok) {
        toast({
          variant: 'destructive',
          title: 'Could not send request',
          description:
            typeof payload.error === 'string' && payload.error.length > 0
              ? payload.error
              : 'Please try again or email hello@all9ssolutions.com.',
        });
        return;
      }

      toast({
        title: 'Consultation Requested',
        description: 'Our enterprise solution architects will contact you within 4 hours.',
      });
      form.reset();
    } catch {
      toast({
        variant: 'destructive',
        title: 'Could not send request',
        description: 'Network error. Please try again or email hello@all9ssolutions.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="consultation" className="bg-background px-[1.25rem] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="flex flex-1 flex-col bg-primary p-8 text-primary-foreground md:p-12">
            <div className="flex flex-1 flex-col justify-center">
              <MessageSquare className="mb-6 h-12 w-12" />
              <h2 className="mb-4 text-3xl font-bold">Request a Strategy Consultation</h2>
              <p className="mb-8 leading-relaxed opacity-80">
                Ready to modernize your enterprise infrastructure? Our team is standing by to help you design a solution that fits your unique scale and complexity.
              </p>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">1</div>
                  <span>Initial discovery call (30 mins)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">2</div>
                  <span>Technical feasibility assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">3</div>
                  <span>Custom architecture proposal</span>
                </div>
              </div>
            </div>
            <p className="mt-8 border-t border-white/15 pt-6 text-xs opacity-80 md:mt-auto md:pt-6">
              Your information will be kept confidential.
            </p>
          </div>
          
          <div className="p-8 md:p-12 flex-1">
            <Form {...form}>
              <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Full Name <span className="text-white" aria-hidden>*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Smith"
                          autoComplete="name"
                          {...field}
                          required
                          className="bg-secondary/50 border-border text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Email <span className="text-white" aria-hidden>*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          autoComplete="email"
                          {...field}
                          required
                          className="bg-secondary/50 border-border text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Company (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Global Corp" {...field} className="bg-secondary/50 border-border text-foreground" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        How can we help? <span className="text-white" aria-hidden>*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your enterprise challenges..."
                          className="min-h-[120px] bg-secondary/50 border-border text-foreground"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending…' : 'Submit Request'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}