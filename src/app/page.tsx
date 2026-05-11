import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Partners } from '@/components/partners';
import { ConsultationForm } from '@/components/consultation-form';
import { AIContentAssistant } from '@/components/ai-assistant';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <AIContentAssistant />
      <ConsultationForm />
      <Footer />
      <Toaster />
    </main>
  );
}
