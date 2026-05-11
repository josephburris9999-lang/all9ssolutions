import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 fade-in-up shadow-lg backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase tracking-wider">Elevating Enterprise Reliability</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 fade-in-up text-foreground leading-[1.1]">
          Modern Solutions for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/60 to-primary bg-[length:200%_auto] animate-gradient">Complex Enterprises</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
          all9s Solutions empowers global organizations with hyper-reliable infrastructure, 
          AI-driven insights, and seamless digital transformation services.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 rounded-full text-lg font-extrabold shadow-[0_0_20px_rgba(123,58,237,0.3)] transition-all hover:scale-105">
            Explore Our Stack
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 rounded-full text-lg font-extrabold border-border hover:bg-white/5 backdrop-blur-sm transition-all text-foreground">
            Book a Demo
          </Button>
        </div>

        <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-muted-foreground/30" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Fortune 500 Trusted</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-muted-foreground/30" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-muted-foreground/30" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Global 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}