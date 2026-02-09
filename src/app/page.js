import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
export default function Home() {
  return (
  
        <main className="flex min-h-screen flex-col bg-[#121212] ">
          <Navbar/>
          <div className="container mx-auto px-12 py-4">
        <Hero></Hero>
        <AboutSection></AboutSection>
        </div>
        </main>
  
    );
}
