"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-20 w-20",
  xl: "h-32 w-32",
};

const initialsSize = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-xl",
  xl: "text-3xl",
};

export function Avatar({
  src = "/velu.jpg",
  alt = "Velu Sankaran",
  size = "md",
  glow = false,
  className,
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={cn(
          "relative flex-shrink-0 rounded-full flex items-center justify-center bg-[var(--accent)] text-white font-bold border-2 border-[var(--accent)]",
          sizeClasses[size],
          glow && "animate-avatar-glow",
          className
        )}
      >
        <span className={initialsSize[size]}>VS</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex-shrink-0 rounded-full overflow-hidden border-2 border-[var(--accent)]",
        sizeClasses[size],
        glow && "animate-avatar-glow",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={size === "lg" || size === "xl"}
        onError={() => setImageError(true)}
      />
    </div>
  );
}

// Small inline avatar for chat messages
export function ChatAvatar({ className }: { className?: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={cn(
          "relative flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-[var(--accent)] text-white font-bold text-xs border border-[var(--accent)]/50",
          className
        )}
      >
        VS
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex-shrink-0 h-8 w-8 rounded-full overflow-hidden border border-[var(--accent)]/50",
        className
      )}
    >
      <Image
        src="/velu.jpg"
        alt="Velu"
        fill
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

// Fallback avatar with initials
export function AvatarFallback({
  initials = "VS",
  size = "md",
  glow = false,
  className,
}: {
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex-shrink-0 rounded-full flex items-center justify-center bg-[var(--accent)] text-white font-bold border-2 border-[var(--accent)]",
        sizeClasses[size],
        glow && "animate-avatar-glow",
        className
      )}
    >
      <span
        className={cn(
          size === "sm" && "text-xs",
          size === "md" && "text-sm",
          size === "lg" && "text-xl",
          size === "xl" && "text-3xl"
        )}
      >
        {initials}
      </span>
    </div>
  );
}
