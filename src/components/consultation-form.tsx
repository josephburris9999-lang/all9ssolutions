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
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Please provide more details"),
});

export function ConsultationForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Consultation Requested",
      description: "Our enterprise solution architects will contact you within 4 hours.",
    });
    form.reset();
  }

  return (
    <section id="consultation" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="p-8 md:p-12 bg-primary flex-1 text-primary-foreground flex flex-col justify-center">
            <MessageSquare className="w-12 h-12 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Request a Strategy Consultation</h2>
            <p className="opacity-80 mb-8 leading-relaxed">
              Ready to modernize your enterprise infrastructure? Our team is standing by to help you design a solution that fits your unique scale and complexity.
            </p>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">1</div>
                <span>Initial discovery call (30 mins)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">2</div>
                <span>Technical feasibility assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">3</div>
                <span>Custom architecture proposal</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 flex-1">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} className="bg-secondary/50 border-border text-foreground" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} className="bg-secondary/50 border-border text-foreground" />
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
                        <FormLabel className="text-foreground">Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Global Corp" {...field} className="bg-secondary/50 border-border text-foreground" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your enterprise challenges..." 
                          className="min-h-[120px] bg-secondary/50 border-border text-foreground" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-full">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}