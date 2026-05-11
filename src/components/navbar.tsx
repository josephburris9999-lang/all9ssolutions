
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const logo = PlaceHolderImages.find(img => img.id === 'brand-logo');

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
            {logo && (
              <Image 
                src={logo.imageUrl} 
                alt="all9s Logo" 
                fill 
                className="object-contain"
                data-ai-hint={logo.imageHint}
              />
            )}
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">all9s <span className="text-primary">Solutions</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors text-foreground/80 hover:text-foreground">Services</Link>
          <Link href="#partners" className="text-sm font-medium hover:text-primary transition-colors text-foreground/80 hover:text-foreground">Partners</Link>
          <Link href="#consultation" className="text-sm font-medium hover:text-primary transition-colors text-foreground/80 hover:text-foreground">Consultation</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex text-foreground/80 hover:text-foreground">Client Portal</Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
