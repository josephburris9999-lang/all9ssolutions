import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8 fade-in-up">
          <Sparkles className="w-3 h-3" />
          <span>Elevating Enterprise Reliability to 99.9999999%</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 fade-in-up text-white leading-tight">
          Modern Solutions for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Complex Enterprises</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 fade-in-up" style={{ animationDelay: '0.2s' }}>
          all9s Solutions empowers global organizations with hyper-reliable infrastructure, 
          AI-driven insights, and seamless digital transformation services.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-full text-lg font-bold">
            Explore Our Stack
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg font-bold border-white/20 hover:bg-white/5">
            Book a Demo
          </Button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-widest">Fortune 500 Trusted</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-widest">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-widest">Global 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}