import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-full overflow-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Services />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
