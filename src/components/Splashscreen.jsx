"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          className="w-16 h-16 mx-auto mb-6 border-4 border-white/30 border-t-white rounded-full"
        />
        <h1 className="text-4xl font-lora font-bold text-white">
          Mariel Martínez
        </h1>
        <p className="mt-2 text-white/60 text-sm tracking-widest uppercase">
          Nutrición
        </p>
      </motion.div>
    </div>
  );
}