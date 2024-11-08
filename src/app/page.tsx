"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import Header from "../components/Header";
import Who from "../components/Who";
import Steps from "../components/Steps";
import Services from "../components/Services";
import Diets from "../components/Diets";
import Footer from "../components/Footer";
import Script from "next/script";

export default function Home() {
  const [loading, setLoading] = useState(false);

  // Simular carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Script
        src="https://code.iconify.design/3/3.1.0/iconify.min.js"
        strategy="beforeInteractive"
      />

      <div className=" items-center justify-items-center min-h-screen font-base">
        <main className="bg-white">
          <Header />
          <Who />
          <Steps />
          <Services />
          <Diets />
        </main>
        <Footer />
      </div>
    </>
  );
}
