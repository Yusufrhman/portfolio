import { About } from "../components/landing/About";
import HeroSection from "../components/landing/Hero";
import { Portfolio } from "../components/landing/Portfolio";

export default function LandingPage() {
  return (
    <main className="text-black">
      <HeroSection />
          <About />
          <Portfolio />
    </main>
  );
}
