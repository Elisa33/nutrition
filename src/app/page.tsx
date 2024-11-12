"use client";
import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import Header from "../components/Header";
import About from "../components/About";
import Steps from "../components/Steps";
import Services from "../components/Services";
import Diets from "../components/Diets";
import Footer from "../components/Footer";

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
      <Header />
      <main className="bg-white">
        <About />
        <Steps />
        <Services />
        <Diets />
      </main>
      <Footer />
    </>
  );
}
