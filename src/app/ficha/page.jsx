"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import StepPersonalData from "@/components/StepPersonalData";
import StepHistory from "@/components/StepHistory";
import StepFood from "@/components/StepFood";
import StepFruits from "@/components/StepFruits";
import StepVegetables from "@/components/StepVegetables";
import StepActivity from "@/components/StepActivity";
import StepYesterday from "@/components/StepYesterday";

export default function FichaNutricional() {
  const methods = useForm({ defaultValues: { checkbox: false } });
  const [formStep, setFormStep] = useState(1);
  const [finishForm, setFinishForm] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setFinishForm(true);
    /* try {
      await sendDataToFirebase(data);
      setFinishForm(true);
      methods.reset();
    } catch (error) {
      console.log("Error al enviar:", error);
    } */
  };

  const completeFormStep = () => {
    setFormStep((current) => current + 1);
  };

  // Animations for each step
  const stepVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-complementary to-secondary">
      <div className="pt-10 wrapper">
        {finishForm ? (
          <div className="text-center text-white">
            <h2>¡Gracias por completar el formulario!</h2>
          </div>
        ) : (
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="grid gap-8 pb-12"
            >
              <h1 className="font-bold">Ficha nutricional</h1>

              <AnimatePresence mode="wait">
                {formStep === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <StepPersonalData completeFormStep={completeFormStep} />
                  </motion.div>
                )}
                {formStep === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <StepHistory completeFormStep={completeFormStep} />
                  </motion.div>
                )}
                {formStep === 3 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <StepFood completeFormStep={completeFormStep} />
                  </motion.div>
                )}
                {formStep === 4 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <StepFruits completeFormStep={completeFormStep} />
                  </motion.div>
                )}
                {formStep === 5 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <StepVegetables completeFormStep={completeFormStep} />
                  </motion.div>
                )}
                {formStep === 6 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <StepActivity completeFormStep={completeFormStep} />
                  </motion.div>
                )}
                {formStep === 7 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <StepYesterday completeFormStep={completeFormStep} />
                    <button
                      type="submit"
                      className="py-2 px-4 bg-secondary text-white rounded-lg mt-4"
                    >
                      Enviar
                    </button>
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
