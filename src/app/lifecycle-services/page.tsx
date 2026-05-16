import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lifecycle Services | all9s Solutions',
  description:
    'How all9s Solutions supports clients across discovery, delivery, operations, and evolution of custom software and web solutions.',
};

export default function LifecycleServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-background px-[1.25rem] pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="absolute top-0 left-1/2 z-[1] h-[1px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Lifecycle Services</h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Complete Development & Support Lifecycle Services
          </p>
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              all9s Solutions provides comprehensive lifecycle services designed to support technology initiatives from
              initial planning through long-term maintenance and optimization. Our approach combines strategic
              development, scalable engineering, deployment support, and ongoing system management to help organizations
              maintain reliable, adaptable, and efficient digital environments.
            </p>
            <p>
              We work closely with clients throughout every phase of the technology lifecycle, ensuring solutions remain
              aligned with operational goals, performance expectations, and evolving business requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Discovery & Planning</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              We begin by understanding business objectives, operational challenges, technical requirements, and long-term goals
              to establish a clear project foundation.
            </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Solution Architecture</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Systems and applications are designed with scalability, maintainability, performance, and future growth in mind.
            </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Development & Integration</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Custom software, web applications, automation systems, and integrated solutions are developed using modern technologies
              and development practices.
            </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Testing & Optimization</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Applications and systems are evaluated for performance, usability, reliability, and operational efficiency before deployment.
            </p>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Deployment & Implementation</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              We assist with deployment, configuration, migration, and production readiness to ensure smooth implementation into existing environments.
            </p>
        </div>
      </section>
            
      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Ongoing Support & Maintenance</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Post-deployment services include monitoring, troubleshooting, updates, performance improvements, and long-term technical support.
            </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background px-[1.25rem] py-4">
        <div className="absolute top-0 left-1/2 h-[1px] w-full" />
        <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-2 text-3xl font-bold text-foreground">Continuous Improvement</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              As technology and business needs evolve, solutions can be refined, expanded, and optimized to support continued
              growth and operational efficiency.
            </p>
        </div>
      </section>
    </main>
  );
}
