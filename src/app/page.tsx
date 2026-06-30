"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "../components/SplashScreen";
import Header from "../components/Header";
import About from "../components/About";
import Steps from "../components/Steps";
import Services from "../components/Services";
import Diets from "../components/Diets";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true); // ← ahora arranca en true!

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 segundos de splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Header />
          <main className="bg-white">
            <About />
            <Steps />
            <Services />
            <Diets />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}