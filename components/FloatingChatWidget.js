"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CHAT_WELCOME_MESSAGE, CHAT_QUICK_QUESTIONS, generateBotResponse, formatChatTime } from "@/lib/chat";

export default function FloatingChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: CHAT_WELCOME_MESSAGE, time: "Just Now" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-ai-chat", openChat);
    return () => window.removeEventListener("open-ai-chat", openChat);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    const el = chatContainerRef.current;
    if (!el) return;
    const scrollToBottom = () => {
      el.scrollTop = el.scrollHeight;
    };
    scrollToBottom();
    const raf = requestAnimationFrame(scrollToBottom);
    return () => cancelAnimationFrame(raf);
  }, [messages, isTyping, open]);

  const handleUserMessage = (messageText) => {
    setMessages((prev) => [...prev, { role: "user", text: messageText, time: formatChatTime(new Date()) }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse = generateBotResponse(messageText);
      setMessages((prev) => [...prev, { role: "bot", text: botResponse, time: formatChatTime(new Date()) }]);
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
    <div className="floating-chat print-hide">
      {open && (
        <div className="floating-chat-panel">
          <div className="floating-chat-header">
            <span>Ask Neelesh AI</span>
            <button
              type="button"
              className="floating-chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          <div className="floating-chat-messages" ref={chatContainerRef}>
            {messages.map((msg, i) => (
              <div className={`message ${msg.role === "user" ? "user-message" : "bot-message"}`} key={i}>
                <div className="message-bubble" dangerouslySetInnerHTML={{ __html: msg.text }} />
                <span className="message-time">{msg.time}</span>
              </div>
            ))}
            <div className="typing-indicator" style={{ display: isTyping ? "flex" : "none" }}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="floating-chat-quick">
            {CHAT_QUICK_QUESTIONS.map((q) => (
              <button
                key={q.label}
                type="button"
                className="chip chat-chip"
                onClick={() => handleUserMessage(q.question)}
              >
                {q.label}
              </button>
            ))}
          </div>

          <form className="chat-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              className="chat-text-input"
              placeholder="Ask a question..."
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
      )}

      <button
        type="button"
        className={`floating-chat-fab${open ? " is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Ask Neelesh AI"}
        aria-expanded={open}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
        )}
      </button>
    </div>
  );
}
