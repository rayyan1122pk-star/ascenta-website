"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  RotateCcw,
  Sparkles,
  Bot,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const quickQuestions = [
  "What does Rayyan build?",
  "Show me his projects",
  "How can he help my business?",
  "What technologies does he use?",
  "Contact Rayyan",
];

const initialGreeting: ChatMessage = {
  id: "greeting",
  role: "assistant",
  content:
    "Hi! I'm Rayyan's AI Assistant. I can answer questions about his web development, autonomous AI agents, voice calling engines, and n8n workflows. How can I help you today?",
};

function parseInlineMarkdown(text: string): string {
  // Sanitize HTML
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Format bold **text**
  const withBold = escaped.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="text-white font-semibold">$1</strong>'
  );

  // Format markdown links [text](url)
  const withLinks = withBold.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2" class="text-primary underline underline-offset-2 hover:text-white transition-colors font-medium">$1</a>'
  );

  return withLinks;
}

function FormattedContent({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <div className="flex flex-col gap-1.5 text-xs leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-1" />;

        const isBullet = trimmed.startsWith("* ") || trimmed.startsWith("- ");
        const content = isBullet ? trimmed.slice(2) : trimmed;

        return (
          <div key={idx} className={isBullet ? "flex items-start gap-1.5 pl-1" : ""}>
            {isBullet && <span className="text-primary shrink-0 mt-0.5">•</span>}
            <span
              dangerouslySetInnerHTML={{
                __html: parseInlineMarkdown(content),
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const counterRef = useRef(1);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  async function handleSendMessage(messageText?: string) {
    const textToSend = (messageText || input).trim();
    if (!textToSend || isLoading) return;

    const nextId = counterRef.current++;
    const userMessage: ChatMessage = {
      id: `user-${nextId}`,
      role: "user",
      content: textToSend,
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const assistantReply =
        data.reply ||
        "I'm here to help! You can reach Muhammad Rayyan directly via [WhatsApp](https://wa.me/923328444557) or through the [Contact](/contact) page.";

      const replyId = counterRef.current++;
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${replyId}`,
          role: "assistant",
          content: assistantReply,
        },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      const errId = counterRef.current++;
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-err-${errId}`,
          role: "assistant",
          content:
            "I ran into a temporary network delay. You can connect directly with Muhammad Rayyan on [WhatsApp](https://wa.me/923328444557) or by submitting a brief on the [Contact](/contact) page!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleResetChat() {
    setMessages([initialGreeting]);
    setInput("");
  }

  return (
    <aside aria-label="Rayyan's AI Assistant Widget" className="fixed bottom-6 right-4 sm:right-6 z-50">
      {/* Expandable Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 flex h-[530px] max-h-[82vh] w-[calc(100vw-2rem)] sm:w-[390px] flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#17100F]/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#120B0A]/90 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-full border border-primary/40 bg-primary/10">
                  <Image
                    src="/founder/muhammad-rayyan.jpg"
                    alt="Rayyan's AI Assistant"
                    fill
                    sizes="36px"
                    className="object-cover object-[50%_35%] scale-[1.28]"
                  />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#120B0A] bg-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-wide text-white">
                    Rayyan&apos;s AI Assistant
                  </h3>
                  <p className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · Ask about systems & code
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <RotateCcw size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Body (Messages List) */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3.5 overscroll-contain">
              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <div
                    key={m.id}
                    className={cn(
                      "flex flex-col gap-1 max-w-[86%]",
                      isUser ? "self-end items-end" : "self-start items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-2xl p-3.5 shadow-md",
                        isUser
                          ? "rounded-br-xs bg-primary/20 border border-primary/35 text-white"
                          : "rounded-bl-xs bg-[#120B0A] border border-white/10 text-[#F5EFE6]"
                      )}
                    >
                      <FormattedContent text={m.content} />
                    </div>
                  </div>
                );
              })}

              {/* Thinking / Typing State */}
              {isLoading && (
                <div className="self-start max-w-[86%] flex items-center gap-2 rounded-2xl rounded-bl-xs border border-white/10 bg-[#120B0A] px-4 py-3 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">Thinking...</span>
                </div>
              )}

              {/* Quick Prompt Pills (Shown when conversation is short) */}
              {messages.length <= 2 && !isLoading && (
                <div className="mt-2 flex flex-col gap-1.5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Suggested Questions:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickQuestions.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleSendMessage(q)}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-left font-mono text-[11px] text-white/80 transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                      >
                        {q} →
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="border-t border-white/[0.08] bg-[#120B0A]/95 p-3"
            >
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Rayyan's projects, stack, or hiring..."
                  maxLength={500}
                  disabled={isLoading}
                  className="w-full rounded-full border border-white/10 bg-white/[0.04] pl-4 pr-11 py-2 text-xs text-white placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white transition-opacity disabled:opacity-40 hover:bg-primary/90"
                >
                  <Send size={13} />
                </button>
              </div>
              <div className="mt-1.5 flex items-center justify-between px-2 font-mono text-[9px] text-muted-foreground">
                <span>Rayyan&apos;s AI · Grounded in portfolio data</span>
                {input.length > 300 && <span>{500 - input.length} left</span>}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Launcher Button */}
      <motion.button
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setHasOpened(true);
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isOpen ? "Close AI Assistant" : "Open Rayyan's AI Assistant"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-gradient-to-tr from-[#17100F] via-[#211413] to-[#120B0A] shadow-[0_10px_35px_rgba(230,57,70,0.35)] transition-all duration-300 hover:border-primary/50"
      >
        {/* Pulsing ambient rim light */}
        <div className="pointer-events-none absolute -inset-1 rounded-full bg-primary/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={20} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative"
            >
              <Bot size={22} className="text-white transition-colors group-hover:text-primary" />
              {/* Green online ping indicator */}
              <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* First-time prompt bubble hint (disappears after first open) */}
        {!isOpen && !hasOpened && (
          <div className="pointer-events-none absolute bottom-1 right-16 hidden whitespace-nowrap rounded-full border border-white/10 bg-[#17100F]/95 px-3 py-1 font-mono text-[11px] text-white shadow-xl backdrop-blur-md sm:flex items-center gap-1.5">
            <Sparkles size={12} className="text-[#D4A24E]" />
            <span>Ask Rayyan&apos;s AI</span>
          </div>
        )}
      </motion.button>
    </aside>
  );
}
