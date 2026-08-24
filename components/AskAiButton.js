"use client";

export default function AskAiButton({ className, children }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("open-ai-chat"))}
    >
      {children}
    </button>
  );
}
