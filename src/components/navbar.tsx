"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <ShieldCheck className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold tracking-tight text-white">all9s <span className="text-primary">Solutions</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
          <Link href="#partners" className="text-sm font-medium hover:text-primary transition-colors">Partners</Link>
          <Link href="#consultation" className="text-sm font-medium hover:text-primary transition-colors">Consultation</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Client Portal</Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}