"use client";

import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerImages = PlaceHolderImages.filter(img => img.id.startsWith('partner'));

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Strategic Partners</h2>
          <p className="text-muted-foreground">Collaborating with industry leaders to deliver unparalleled expertise.</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partnerImages.map((partner) => (
              <CarouselItem key={partner.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <div className="bg-card border border-border rounded-xl p-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer h-32 group">
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.imageUrl}
                        alt={partner.description}
                        fill
                        className="object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                        data-ai-hint={partner.imageHint}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-background border-border" />
            <CarouselNext className="bg-background border-border" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}