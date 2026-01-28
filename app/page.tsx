"use client";

import { useRef } from "react";
import { useChat } from "ai/react";
import clsx from "clsx";
import {
  LoadingCircle,
  SendIcon,
  UserIcon,
  FutureIcon,
} from "./icons";
import Textarea from "react-textarea-autosize";

const examples = [
  "What does the future feel like to you?",
  "Describe a world where borders have dissolved.",
  "How might we live alongside the rivers in 2075?",
];

export default function Chat() {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, input, setInput, handleSubmit, isLoading } = useChat({
    onResponse: (response) => {
      if (response.status === 429) {
        window.alert("You have reached your request limit for the day.");
        return;
      }
    },
  });

  const disabled = isLoading || input.length === 0;

  return (
    <main className="min-h-screen flex flex-col items-center pb-40">
      {/* Header */}
      <header className="w-full border-b border-[var(--color-border)] bg-[var(--color-paper)]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="category-label">Berlin International University</span>
          <span className="category-label">Futuring Workshop</span>
        </div>
      </header>

      {messages.length > 0 ? (
        <div className="w-full flex-1">
          {messages.map((message, i) => (
            <div
              key={i}
              className={clsx(
                "w-full py-8 animate-fade-in",
                message.role === "user" 
                  ? "bg-[var(--color-paper)]" 
                  : "bg-white border-b border-[var(--color-border)]",
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="max-w-3xl mx-auto px-6 flex gap-5">
                <div className="flex-shrink-0 pt-1">
                  {message.role === "user" ? (
                    <div className="w-8 h-8 rounded-full bg-[var(--color-ink)] flex items-center justify-center text-[var(--color-paper)]">
                      <UserIcon />
                    </div>
                  ) : (
                    <FutureIcon />
                  )}
                </div>
                <div className="flex-1">
                  <span className="category-label block mb-2">
                    {message.role === "user" ? "You" : "Future Voice"}
                  </span>
                  <div className="prose">
                    {message.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-2xl w-full">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="accent-line mx-auto mb-8"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                Future Voice
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                A collective voice trained on the futures we imagined together—
                political, ecological, personal, speculative.
              </p>
            </div>

            {/* About Section */}
            <div className="border-t border-b border-[var(--color-border)] py-10 mb-12 animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <span className="category-label block mb-4">About This Project</span>
              <p className="text-[var(--color-ink)] leading-relaxed">
                During a workshop at Berlin International University, participants contributed their visions 
                of the future. These imaginings—hopeful, troubled, contradictory—were used to fine-tune 
                an AI model. What you encounter here is not prediction, but a dreamlike synthesis of our 
                collective longing and foresight.
              </p>
            </div>

            {/* Prompts Section */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="category-label block mb-6">Begin the Conversation</span>
              <div className="space-y-3">
                {examples.map((example, i) => (
                  <button
                    key={i}
                    className="w-full text-left px-5 py-4 border border-[var(--color-border)] bg-white
                             hover:border-[var(--color-ink)] transition-all duration-200
                             text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
                    onClick={() => {
                      setInput(example);
                      inputRef.current?.focus();
                    }}
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="fixed bottom-0 w-full bg-gradient-to-t from-[var(--color-paper)] via-[var(--color-paper)] to-transparent pt-8 pb-6 px-6">
        <div className="max-w-3xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative bg-white border border-[var(--color-border)] shadow-sm"
          >
            <Textarea
              ref={inputRef}
              tabIndex={0}
              required
              rows={1}
              autoFocus
              placeholder="Ask about the future..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  formRef.current?.requestSubmit();
                  e.preventDefault();
                }
              }}
              spellCheck={false}
              className="w-full px-5 py-4 pr-14 focus:outline-none resize-none bg-transparent"
              style={{ fontFamily: 'var(--font-sans)' }}
            />
            <button
              className={clsx(
                "absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center transition-all duration-200",
                disabled
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[var(--color-ink)] hover:text-white rounded-sm",
              )}
              disabled={disabled}
              type="submit"
            >
              {isLoading ? (
                <LoadingCircle />
              ) : (
                <SendIcon
                  className={clsx(
                    "w-4 h-4",
                    input.length === 0 ? "text-[var(--color-border)]" : "text-[var(--color-ink)]",
                  )}
                />
              )}
            </button>
          </form>
          
          {/* Footer */}
          <p className="text-center text-xs text-[var(--color-muted)] mt-4">
            Created by{' '}
            <a
              href="https://www.halimmadi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-ink)] transition-colors underline underline-offset-2"
            >
              Halim Madi
            </a>
            {' '}for Berlin International University · Built with{' '}
            <a
              href="https://sdk.vercel.ai/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-ink)] transition-colors underline underline-offset-2"
            >
              Vercel AI SDK
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
