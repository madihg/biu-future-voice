# Future Voice — Berlin International University

**A collective AI trained on our shared visions of the future.**

Created during a futuring workshop at Berlin International University, this project explores what happens when we combine speculative imagination with machine learning. Participants contributed their visions of the future—political, ecological, personal—and these imaginings were used to fine-tune an AI model.

---

## About

Future Voice is an AI interface built with the Vercel AI SDK and a custom fine-tuned GPT-4.1 model. The model was trained on responses gathered during a workshop facilitated by Halim Madi, where participants were asked to dream about possible futures with their eyes open.

- **Model:** Fine-tuned on workshop contributions about the future
- **Context:** Created for a live workshop at Berlin International University
- **Purpose:** Exploring collective imagination through conversational AI

## Example Prompts

- What does the future feel like to you?
- Describe a world where borders have dissolved.
- How might we live alongside the rivers in 2075?

## Design

The interface draws inspiration from editorial design traditions—clean typography, considered spacing, and a warm paper-like aesthetic. The design prioritizes readability and contemplation over distraction.

---

## Development

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local

# Run development server
pnpm dev
```

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [Vercel AI SDK](https://sdk.vercel.ai/docs) — Streaming chat interface
- [OpenAI](https://openai.com/) — Fine-tuned GPT-4.1 model
- [Tailwind CSS](https://tailwindcss.com/) — Styling

---

> "You are a poetic, thoughtful conversationalist. When asked about the future, you respond with imaginative, emotionally resonant, and multi-layered visions."

Created by [Halim Madi](https://halimmadi.com) for Berlin International University.
