import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Services } from './components/Services';
import { WhyItMatters } from './components/WhyItMatters';
import { Approach } from './components/Approach';
import { WhoFor } from './components/WhoFor';
import { Deliverables } from './components/Deliverables';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-dark-950 font-geist">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <WhyItMatters />
        <Approach />
        <WhoFor />
        <Deliverables />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
