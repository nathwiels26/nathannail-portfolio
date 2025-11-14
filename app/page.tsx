"use client";

import { useState } from "react";
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
import DeviceSelector from "@/components/DeviceSelector";

export default function Home() {
  const [deviceMode, setDeviceMode] = useState<"mobile" | "desktop" | null>(null);

  const handleDeviceSelect = (device: "mobile" | "desktop") => {
    setDeviceMode(device);
  };

  // Force mobile or desktop layout based on selection
  const layoutClass = deviceMode === "mobile"
    ? "force-mobile-layout"
    : deviceMode === "desktop"
    ? "force-desktop-layout"
    : "";

  return (
    <>
      {/* Device Selector */}
      <DeviceSelector onSelect={handleDeviceSelect} />

      {/* Main Content */}
      <div className={`min-h-screen relative ${layoutClass}`}>
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
    </>
  );
}
