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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">World-Class Stack</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Engineered for high-availability, scalability, and security. Choose the tier that matches your global footprint.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                  {product.icon}
                </div>
                <Badge variant="secondary" className="w-fit mb-2 bg-primary/10 text-primary border-none">{product.tier}</Badge>
                <CardTitle className="text-2xl font-bold mb-2">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div className="pt-4 border-t border-border w-full">
                  <span className="text-3xl font-bold">{product.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                  Configure Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}