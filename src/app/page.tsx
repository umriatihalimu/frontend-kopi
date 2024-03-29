import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Member from "@/components/Member";
import Menu from "@/components/Menu";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="h-[8000]">
      <Hero />
      <Menu />
      <About />
      <Member />
      <Contact />
    </main>
  );
}
