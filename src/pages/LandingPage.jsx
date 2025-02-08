import { About } from "../components/landing/About";
import HeroSection from "../components/landing/Hero";
import Projects from "../components/landing/Projects";

export default function LandingPage() {
  return (
    <main className="text-black">
      <HeroSection />
      <About />
      <Projects />
    </main>
  );
}
