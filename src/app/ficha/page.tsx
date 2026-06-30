"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import StepPersonalData from "@/components/StepPersonalData";
import StepHistory from "@/components/StepHistory";
import StepFood from "@/components/StepFood";
import StepFruits from "@/components/StepFruits";
import StepVegetables from "@/components/StepVegetables";
import StepActivity from "@/components/StepActivity";
import StepYesterday from "@/components/StepYesterday";

const TOTAL_STEPS: number = 7;

const stepLabels: string[] = [
  "Datos personales",
  "Historia clínica",
  "Alimentos",
  "Frutas",
  "Verduras",
  "Actividad física",
  "Recordatorio 24hs",
];

const stepVariants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

export default function FichaNutricional() {
  const methods = useForm({ defaultValues: { checkbox: false }, mode: "onTouched" });
  const [formStep, setFormStep] = useState<number>(1);
  const [finishForm, setFinishForm] = useState<boolean>(false);

  const onSubmit = (data: Record<string, unknown>): void => {
    console.log(data);
    setFinishForm(true);
  };

  const completeFormStep = (): void => {
    setFormStep((current) => Math.min(current + 1, TOTAL_STEPS));
  };

  const goBack = (): void => {
    setFormStep((current) => Math.max(current - 1, 1));
  };

  const progress: number = (formStep / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 via-secondary to-complementary-900">
      <div className="pt-6 wrapper">
        {finishForm ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-screen gap-8 text-center text-white pb-20"
          >
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">¡Gracias por completar el formulario!</h2>
            <p className="text-white/80 max-w-md">
              Tu información ha sido registrada correctamente. La nutricionista se pondrá en contacto contigo pronto.
            </p>
            <Link
              href="/"
              className="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Volver al inicio
            </Link>
          </motion.div>
        ) : (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-6 pb-12">
              {/* Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Ficha nutricional</h2>
                  <span className="text-sm text-white/70">Paso {formStep} de {TOTAL_STEPS}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-white h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <div className="hidden sm:flex justify-between text-xs text-white/50">
                  {stepLabels.map((label: string, i: number) => (
                    <span
                      key={label}
                      className={`${i + 1 === formStep ? "text-white font-medium" : ""} ${i + 1 < formStep ? "text-white/70" : ""}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {formStep === 1 && (
                  <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
                    <StepPersonalData completeFormStep={completeFormStep} />
                  </motion.div>
                )}
                {formStep === 2 && (
                  <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
                    <StepHistory completeFormStep={completeFormStep} goBack={goBack} />
                  </motion.div>
                )}
                {formStep === 3 && (
                  <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
                    <StepFood completeFormStep={completeFormStep} goBack={goBack} />
                  </motion.div>
                )}
                {formStep === 4 && (
                  <motion.div key="step4" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
                    <StepFruits completeFormStep={completeFormStep} goBack={goBack} />
                  </motion.div>
                )}
                {formStep === 5 && (
                  <motion.div key="step5" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
                    <StepVegetables completeFormStep={completeFormStep} goBack={goBack} />
                  </motion.div>
                )}
                {formStep === 6 && (
                  <motion.div key="step6" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
                    <StepActivity completeFormStep={completeFormStep} goBack={goBack} />
                  </motion.div>
                )}
                {formStep === 7 && (
                  <motion.div key="step7" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
                    <StepYesterday goBack={goBack} />
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FormProvider>
        )}
      </div>
    </div>
  );
}