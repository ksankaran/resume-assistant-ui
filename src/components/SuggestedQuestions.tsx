"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  className?: string;
}

const suggestions = [
  "What did you build at ADP?",
  "Tell me about your AI experience",
  "What's your tech stack?",
  "Describe your role at Walmart",
];

export function SuggestedQuestions({
  onSelect,
  className,
}: SuggestedQuestionsProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Sparkles className="h-4 w-4 text-[var(--accent)]" />
        <span>Try asking:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((question, index) => (
          <motion.button
            key={question}
            onClick={() => onSelect(question)}
            className="px-4 py-2 text-sm rounded-full border border-border bg-background hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors theme-transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {question}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// Compact version for showing below input
export function QuickSuggestions({
  onSelect,
  className,
}: SuggestedQuestionsProps) {
  const quickSuggestions = suggestions.slice(0, 3);

  return (
    <div className={cn("flex items-center gap-2 overflow-x-auto", className)}>
      {quickSuggestions.map((question) => (
        <button
          key={question}
          onClick={() => onSelect(question)}
          className="flex-shrink-0 px-3 py-1.5 text-xs rounded-full border border-border bg-background/50 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
        >
          {question}
        </button>
      ))}
    </div>
  );
}
