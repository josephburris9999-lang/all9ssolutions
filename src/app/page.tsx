import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Partners } from '@/components/partners';
import { ConsultationForm } from '@/components/consultation-form';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Partners />
      <ConsultationForm />
    </main>
  );
}
