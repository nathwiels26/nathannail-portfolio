"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OtherExperiences from "@/components/OtherExperiences";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingShapes from "@/components/FloatingShapes";
import PageLoader from "@/components/PageLoader";
import ScrollProgress from "@/components/ScrollProgress";
import LiquidBlob from "@/components/LiquidBlob";
import Interactive3DSphere from "@/components/Interactive3DSphere";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Page Loader */}
      <PageLoader />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Animated backgrounds */}
      <AnimatedBackground />
      <FloatingShapes />
      <LiquidBlob />
      <Interactive3DSphere />

      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <OtherExperiences />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
