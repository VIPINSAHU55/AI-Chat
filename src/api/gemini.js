import { GoogleGenAI } from "@google/genai";

const apikey = import.meta.env.VITE_GEMINI_API;
const ai = new GoogleGenAI({ apiKey: apikey });

async function callGemini(prompt) {
  const res = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(res.text);
  const output = await res.text;
  return output;
}

export default callGemini;