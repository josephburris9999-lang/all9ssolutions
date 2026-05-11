import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Cpu, Globe, Rocket, ShieldCheck, Zap } from 'lucide-react';

const products = [
  {
    title: "QuantumCore",
    description: "The foundation of enterprise computing, offering ultra-low latency and infinite scalability.",
    icon: <Cpu className="w-10 h-10 text-primary" />,
    features: ["Sub-ms Latency", "Global Mesh Networking", "Zero-trust Architecture"],
    price: "$4,999",
    tier: "Foundation"
  },
  {
    title: "AuraLink",
    description: "Next-gen communication mesh for distributed teams and microservices architecture.",
    icon: <Globe className="w-10 h-10 text-primary" />,
    features: ["Multi-cloud Routing", "Adaptive Firewalling", "Neural Load Balancing"],
    price: "$2,499",
    tier: "Growth"
  },
  {
    title: "ZenithOps",
    description: "AI-powered operations platform that predicts outages before they occur.",
    icon: <Zap className="w-10 h-10 text-primary" />,
    features: ["Predictive Maintenance", "Auto-scaling Clusters", "Carbon-neutral Compute"],
    price: "Custom",
    tier: "Enterprise"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1">OUR ECOSYSTEM</Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">World-Class Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Engineered for high-availability, scalability, and security. Choose the tier that matches your global footprint.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Card key={idx} className="bg-card/50 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {product.icon}
              </div>
              <CardHeader className="relative">
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  {product.icon}
                </div>
                <Badge variant="secondary" className="w-fit mb-3 bg-primary/10 text-primary border-none font-bold px-3">{product.tier}</Badge>
                <CardTitle className="text-2xl font-black mb-3 text-foreground">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground/80 leading-relaxed text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-6 relative pt-8">
                <div className="pt-6 border-t border-border/50 w-full flex items-baseline gap-1">
                  <span className="text-4xl font-black text-foreground">{product.price}</span>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">/ Month</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black h-14 rounded-xl shadow-lg transition-all active:scale-[0.98]">
                  Deploy Infrastructure
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}