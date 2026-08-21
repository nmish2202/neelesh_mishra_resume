"use client";

import { useEffect, useRef, useState } from "react";
import { CHAT_QA, CHAT_FALLBACKS } from "@/lib/data";

const INFO_ITEMS = [
  "Professional Experience",
  "Next.js, PHP, & AWS Skills",
  "Certifications (AWS, Davra)",
  "Contact Info & Location",
];

const QUICK_QUESTIONS = [
  { question: "What is Neelesh's main tech stack?", label: "What is your tech stack?" },
  { question: "What certifications do you hold?", label: "Are you AWS certified?" },
  { question: "Where was your last role located and what did you do?", label: "What did you do at e&?" },
  { question: "How can I contact Neelesh?", label: "How can I contact you?" },
];

function generateBotResponse(userInput) {
  const cleanedInput = userInput.trim().toLowerCase();

  for (const qa of CHAT_QA) {
    if (qa.pattern.test(cleanedInput)) {
      return qa.reply;
    }
  }

  const randomIndex = Math.floor(Math.random() * CHAT_FALLBACKS.length);
  return CHAT_FALLBACKS[randomIndex];
}

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello! I'm Neelesh's interactive portfolio assistant. Ask me questions about his career, experience at e& / Appventurez, technical stack, or certifications. How can I help you today?",
      time: "Just Now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleUserMessage = (messageText) => {
    setMessages((prev) => [...prev, { role: "user", text: messageText, time: formatTime(new Date()) }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse = generateBotResponse(messageText);
      setMessages((prev) => [...prev, { role: "bot", text: botResponse, time: formatTime(new Date()) }]);
    }, 800 + Math.random() * 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query) return;
    setInputValue("");
    handleUserMessage(query);
  };

  return (
    <section id="chat" className="section chat-section print-hide">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">AI Assistant</span>
          <h2 className="section-title">Ask Neelesh AI</h2>
          <p className="section-subtitle">Chat with an AI assistant powered by Neelesh&apos;s detailed professional background</p>
        </div>

        <div className="card chat-card">
          <div className="chat-layout">
            {/* Chat Info / Suggested Chips */}
            <div className="chat-sidebar">
              <h3>Ask anything about:</h3>
              <ul className="chat-info-list">
                {INFO_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="suggestion-chips-header">Quick Questions:</div>
              <div className="suggestion-chips">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q.label}
                    className="chip chat-chip"
                    onClick={() => handleUserMessage(q.question)}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="chat-window">
              <div className="chat-messages" ref={chatContainerRef}>
                {messages.map((msg, i) => (
                  <div className={`message ${msg.role === "user" ? "user-message" : "bot-message"}`} key={i}>
                    <div className="message-bubble" dangerouslySetInnerHTML={{ __html: msg.text }} />
                    <span className="message-time">{msg.time}</span>
                  </div>
                ))}
              </div>

              <div className="typing-indicator" style={{ display: isTyping ? "flex" : "none" }}>
                <span />
                <span />
                <span />
              </div>

              <form className="chat-input-area" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="chat-text-input"
                  placeholder="Type your query (e.g. 'How long did you work at Appventurez?')..."
                  autoComplete="off"
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="btn btn-primary" aria-label="Send message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
