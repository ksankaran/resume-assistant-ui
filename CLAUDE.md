# Resume Assistant UI

Personal portfolio chat interface for Velu Sankaran's AI resume assistant.

## Overview

- **Live Site:** https://velu.dev
- **Backend:** LangGraph server (my-resume-assistant repo)
- **Style:** Monochrome + Electric Blue (#0088ff) accent

## Tech Stack

- **Framework:** Next.js 15 with React 19
- **Styling:** Tailwind CSS with CSS custom properties
- **Animations:** Framer Motion
- **Theming:** next-themes (dark/light mode)
- **State:** nuqs (URL query state)
- **LangGraph:** @langchain/langgraph-sdk

## Running Locally

```bash
cd /usr/local/workspace/resume-assistant-ui

# Use Node 20+
nvm use 20

# Install dependencies
npm install

# Start dev server
npm run dev
```

UI runs at `http://localhost:3000`

**Note:** Requires LangGraph server running on port 2024 (see my-resume-assistant repo)

## Key Components

| Component | Purpose |
|-----------|---------|
| `src/components/Welcome.tsx` | Landing screen with avatar, typewriter tagline, suggestions |
| `src/components/Avatar.tsx` | Animated avatar with glow effect, fallback to "VS" initials |
| `src/components/ThemeToggle.tsx` | Dark/light mode switch with animated icons |
| `src/components/TypingIndicator.tsx` | Animated dots shown while AI responds |
| `src/components/SuggestedQuestions.tsx` | Clickable question chips |
| `src/components/thread/index.tsx` | Main chat interface |
| `src/components/thread/messages/ai.tsx` | AI message bubbles with avatar |

## Design System

### Colors (CSS Variables in globals.css)

```css
--background: #0a0a0a (dark) / #fafafa (light)
--foreground: #fafafa (dark) / #0a0a0a (light)
--accent: #0088ff (electric blue)
--accent-glow: rgba(0, 136, 255, 0.2)
```

### Animations

- `avatar-glow`: Pulsing glow on avatar border
- `typing-dot`: Bouncing dots for typing indicator
- `fade-in-up`: Message entrance animation
- `cursor`: Blinking cursor for typewriter effect

## Configuration

### Environment Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:2024` | LangGraph server URL |
| `NEXT_PUBLIC_ASSISTANT_ID` | `agent` | LangGraph assistant/graph ID |

### Auto-Connect

The app auto-connects to local LangGraph server for development. No setup form needed.

## Assets

- `public/velu.jpg` - Professional photo (used in Avatar component)
- `public/logo.svg` - LangGraph logo

## Deployment

Pushes to main auto-deploy (likely via Vercel or similar).

## Related Repos

- **Backend:** `/usr/local/workspace/my-resume-assistant` (https://github.com/ksankaran/my-resume-assistant)
- **Book:** `/usr/local/workspace/ztaa-book` (Zero to AI Agent)
