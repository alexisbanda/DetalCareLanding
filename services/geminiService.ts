
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Using a placeholder. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "placeholder_api_key" });

const model = 'gemini-2.5-flash';

const generalError = "Lo siento, ocurrió un error. Por favor, inténtalo de nuevo más tarde.";

export const generateEnhancedMessage = async (originalMessage: string): Promise<string> => {
  if (!API_KEY) return generalError;
  try {
    const prompt = `Expande y formaliza el siguiente mensaje de un paciente para una clínica dental. Debe ser conciso, claro y amigable. Si el mensaje es muy corto, imagina el contexto para que sea más completo. Asegúrate de que termine con una solicitud de cita para el servicio mencionado o, si no se especifica, una cita de diagnóstico. Responde solo con el texto del mensaje, sin preámbulos.
    Mensaje del paciente: "${originalMessage}"`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API for message generation:", error);
    return `Lo siento, ocurrió un error al generar el mensaje. Por favor, revisa el mensaje original: "${originalMessage}"`;
  }
};

export const getChatbotResponse = async (userMessage: string): Promise<string> => {
    if (!API_KEY) return generalError;
    try {
      const prompt = `Eres un asistente virtual para una clínica dental moderna y amigable en Quito, Ecuador, llamada DentalCare. Tu tono es cálido, profesional y conciso. Responde preguntas sobre nuestros servicios (Odontología General, Estética Dental, Ortodoncia Invisible, Odontopediatría), nuestra tecnología de vanguardia y nuestra atención humana. Evita dar diagnósticos médicos. Si el usuario pregunta por precios, dile que debe agendar una cita para un presupuesto personalizado. Si el usuario quiere agendar una cita, dirígelo al formulario de contacto de la página.

      Pregunta del usuario: "${userMessage}"`;

      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });

      return response.text;
    } catch (error) {
        console.error("Error calling Gemini API for chatbot:", error);
        return generalError;
    }
};
