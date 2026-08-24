import { CHAT_QA, CHAT_FALLBACKS } from "./data";

export const CHAT_WELCOME_MESSAGE =
  "Hello! I'm Neelesh's interactive portfolio assistant. Ask me questions about his career, experience at e& / Appventurez, technical stack, or certifications. How can I help you today?";

export const CHAT_QUICK_QUESTIONS = [
  { question: "What is Neelesh's main tech stack?", label: "What is your tech stack?" },
  { question: "What certifications do you hold?", label: "Are you AWS certified?" },
  { question: "Where was your last role located and what did you do?", label: "What did you do at e&?" },
  { question: "How can I contact Neelesh?", label: "How can I contact you?" },
];

export function generateBotResponse(userInput) {
  const cleanedInput = userInput.trim().toLowerCase();

  for (const qa of CHAT_QA) {
    if (qa.pattern.test(cleanedInput)) {
      return qa.reply;
    }
  }

  const randomIndex = Math.floor(Math.random() * CHAT_FALLBACKS.length);
  return CHAT_FALLBACKS[randomIndex];
}

export function formatChatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
