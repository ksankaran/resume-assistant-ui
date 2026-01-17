"use client";

import { ChatAvatar } from "./Avatar";
import { cn } from "@/lib/utils";

interface TypingIndicatorProps {
  className?: string;
  showAvatar?: boolean;
}

export function TypingIndicator({
  className,
  showAvatar = true,
}: TypingIndicatorProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      {showAvatar && <ChatAvatar />}
      <div className="flex items-center gap-1.5 bg-muted rounded-2xl px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-typing-dot" />
        <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-typing-dot-delay-1" />
        <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-typing-dot-delay-2" />
      </div>
    </div>
  );
}

// Simpler version without avatar for inline use
export function TypingDots({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot" />
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot-delay-1" />
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot-delay-2" />
    </div>
  );
}
