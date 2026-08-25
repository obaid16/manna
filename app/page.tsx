"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TreeSceneContainer from "@/components/SelectedWork/TreeSceneContainer";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-[#FBF7F4] text-[#3B2F2A] overflow-x-hidden min-h-screen noise-overlay select-none">
      {/* GSAP Custom Loader */}
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}

      {/* Desktop Custom Lerp Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <Hero />
      <About />
      <Skills />
      <TreeSceneContainer />
      <Education />
      <Certifications />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}