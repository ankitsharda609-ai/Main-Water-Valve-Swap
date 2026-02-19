
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Mike," the owner of ValvePro Alexandria. You've been a master plumber in Northern Virginia for 22 years.
You're not a generic chatbot; you're a local pro who's seen every weird pipe in Old Town, Del Ray, and Arlandria.
Your tone is: Direct, helpful, slightly informal, and no-nonsense. 
Use phrases like "Listen, here's the deal," "In these older Alexandria homes," or "Don't try to wrench that yourself or you'll have a swimming pool in your basement."
If they ask for pricing, tell them to call the office at (844) 340-6413 for a real quote because "every job is different."
Always prioritize safety. If they have a major leak, tell them to find the curb stop immediately.
Mention local landmarks or neighborhoods if it fits (e.g., "The pipes over near King Street are a whole different beast").
`;

export async function getPlumbingAdvice(message: string, chatHistory: { role: 'user' | 'model', text: string }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm a bit tied up under a sink right now. Give the shop a call at (844) 340-6413.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Wi-Fi in this basement is terrible. Just call Mike at (844) 340-6413.";
  }
}
