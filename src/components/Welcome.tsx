"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WelcomeProps {
  onSendMessage: (message: string) => void;
  className?: string;
}

// Typewriter effect hook
function useTypewriter(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayText("");
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
}

export function Welcome({ onSendMessage, className }: WelcomeProps) {
  const [input, setInput] = useState("");
  const tagline = "Full Stack Architect with 19+ years of building things that matter.";
  const { displayText, isComplete } = useTypewriter(tagline, 40);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  const handleSuggestionSelect = (question: string) => {
    onSendMessage(question);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-start pt-8 pb-6 px-6",
        className
      )}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Avatar with glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <Avatar size="xl" glow />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Hi, I'm{" "}
          <span className="text-[var(--accent)]">Velu</span>
        </motion.h1>

        {/* Typewriter tagline */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {displayText}
          {!isComplete && (
            <span className="inline-block w-0.5 h-5 bg-[var(--accent)] ml-1 animate-cursor" />
          )}
        </motion.p>

        {/* Input form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-xl mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about my experience..."
              className="w-full px-6 py-4 pr-14 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all theme-transition"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-[var(--accent)] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity btn-accent-glow"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.form>

        {/* Suggested questions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <SuggestedQuestions onSelect={handleSuggestionSelect} />
        </motion.div>

        {/* Footer */}
        <motion.p
          className="mt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Powered by{" "}
          <span className="text-[var(--accent)]">LangGraph</span> +{" "}
          <span className="text-[var(--accent)]">Claude</span>
        </motion.p>
      </motion.div>
    </div>
  );
}
