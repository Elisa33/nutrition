"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import StepPersonalData from "@/components/StepPersonalData";
import StepHistory from "@/components/StepHistory";
//import StepHabits from "@/components/StepHabits"; // Agregar más pasos si es necesario
//import { sendDataToFirebase } from "@/utils/api"; // Lógica de envío

export default function FichaNutricional() {
  const methods = useForm({ defaultValues: { checkbox: false } });
  const [formStep, setFormStep] = useState(1);
  const [finishForm, setFinishForm] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    /* try {
      await sendDataToFirebase(data); // Llamada al API para enviar datos
      setFinishForm(true);
      methods.reset();
    } catch (error) {
      console.log("Error al enviar:", error);
    } */
  };

  const completeFormStep = () => {
    setFormStep((current) => current + 1);
  };

  return (
    <div className="h-screen bg-gradient-to-b from-secondary to-primary">
      <div className="pt-10 wrapper">
        {finishForm ? (
          <div className="text-center text-white">
            <h2>¡Gracias por completar el formulario!</h2>
          </div>
        ) : (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <h1 className="font-bold">Ficha nutricional</h1>

              {formStep === 1 && (
                <StepPersonalData completeFormStep={completeFormStep} />
              )}
              {formStep === 2 && (
                <StepHistory completeFormStep={completeFormStep} />
              )}
              {formStep === 3 && (
                <StepHabits completeFormStep={completeFormStep} />
              )}
              {/* Agrega más pasos según sea necesario */}

              {formStep === 3 && (
                <button
                  type="submit"
                  className="py-2 px-4 bg-secondary text-white rounded-lg"
                >
                  Enviar
                </button>
              )}
            </form>
          </FormProvider>
        )}
      </div>
    </div>
  );
}
