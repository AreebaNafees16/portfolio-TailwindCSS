import Image from "next/image";
import Footer from "@/components/footer";
import Hero from "@/components/section/hero";
import About from "@/components/section/about";
import Projects from "@/components/section/projects";
import Contact from "@/components/section/contact";
import ProjectCard from "@/components/projectCard";



export default function Mainpage() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container mx-auto md:px-28 px-4 mt-20 py-4 bg-black">
        
      <Hero />
      <About />
      <Projects />
      <Contact />
      </div>
    </main>
    
  );
}



