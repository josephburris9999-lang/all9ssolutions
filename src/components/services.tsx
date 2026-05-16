import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Check, Code2, Compass, Database, Globe, RefreshCw, Workflow, type LucideIcon } from 'lucide-react';

const serviceCards: {
  title: string;
  description: string;
  features: string[];
  Icon: LucideIcon;
}[] = [
  {
    title: 'Custom Software Development',
    description:
      'Design and development of tailored software solutions built to meet unique business and operational needs.',
    features: [
      'Scalable Business Applications',
      'Custom Workflow Solutions',
      'Enterprise Software Development',
    ],
    Icon: Code2,
  },
  {
    title: 'Web Development',
    description:
      'Creation of modern, responsive, and performance-focused websites and web applications.',
    features: ['Responsive Design', 'Performance Optimization', 'Modern User Interfaces'],
    Icon: Globe,
  },
  {
    title: 'Technology Consulting',
    description:
      'Strategic guidance and technical expertise to help businesses improve workflows, systems, and digital operations.',
    features: ['Strategic Planning', 'System Evaluation', 'Technical Guidance'],
    Icon: Compass,
  },
  {
    title: 'Database Solutions',
    description:
      'Database design, integration, optimization, and management using enterprise relational database systems.',
    features: ['SQL Database Design', 'Data Integration', 'Query Optimization'],
    Icon: Database,
  },
  {
    title: 'Business Automation',
    description:
      'Development of automated workflows and tools that improve efficiency and reduce repetitive tasks.',
    features: ['Workflow Automation', 'Process Optimization', 'Productivity Enhancement'],
    Icon: Workflow,
  },
  {
    title: 'Digital Transformation Services',
    description:
      'Implementation of modern digital technologies and solutions to help organizations adapt and grow in evolving environments.',
    features: [
      'Legacy System Modernization',
      'Digital Workflow Integration',
      'Technology Migration Services',
    ],
    Icon: RefreshCw,
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-background px-[1.25rem] py-24">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Scalable software and web solutions built for evolving business needs.
          </p>
        </div>

        <div className="grid max-w-7xl mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map(({ title, description, features, Icon }) => (
            <Card
              key={title}
              className="bg-card/50 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              <CardHeader className="relative">
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-black mb-3 text-foreground">{title}</CardTitle>
                <CardDescription className="text-muted-foreground/80 leading-relaxed text-sm">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4">
                  {features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <div className="h-5 w-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
