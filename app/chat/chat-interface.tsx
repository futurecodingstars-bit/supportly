"use client";

import { useState, type SubmitEvent } from "react";

type ChatMessage = {
    id: string;
    role: "user" | "assistant";
    content: string;
};

const suggestedQuestions = [
    "How long does shipping take?",
    "Can I get a refund?",
    "What are your support hours?",
];

function getMockReply(message: string) {
    const normalized = message.toLowerCase();

    if (normalized.includes("shipping")) {
        return "Standard shipping usually takes 3–5 business days.";
    }

    if (normalized.includes("refund")) {
        return "Standard purchases can be refunded within 30 days, as long as the order meets the refund policy.";
    }

    if (
        normalized.includes("support") ||
        normalized.includes("hours")
    ) {
        return "Support is available Monday through Friday, from 9 AM to 6 PM.";
    }

    return "I can currently help with shipping, refunds, and support hours. In a later episode, weʾll connect this flow to a real AI support pipeline.";
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "welcome",
            role: "assistant",
            content:
                "Hi! Iʾm your Supportly AI assistant. Ask me about shipping, returns, or support hours.",
        },
    ]);

    const [input, setInput] = useState("");
    const [pending, setPending] = useState(false);

    function sendMessage(message: string) {
        const trimmedMessage = message.trim();

        if (!trimmedMessage || pending) {
            return;
        }

        const userMessage: ChatMessage = {
            id: `${Date.now()}-user`,
            role: "user",
            content: trimmedMessage,
        };

        setMessages((current) => [...current, userMessage]);
        setInput("");
        setPending(true);

        window.setTimeout(() => {
            const assistantMessage: ChatMessage = {
                id: `${Date.now()}-assistant`,
                role: "assistant",
                content: getMockReply(trimmedMessage),
            };

            setMessages((current) => [...current, assistantMessage]);
            setPending(false);
        }, 700);
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        sendMessage(input);
    }

    return (
        <div className="flex min-h-[620px] flex-col">
            <div
                className="min-h-0 flex-1 space-y-4 overflow-y-auto py-2"
                aria-live="polite"
            >

                <p className="text-white">
                    Current input: {input}
                </p>


                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                    >
                        {message.role === "assistant" && (
                            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-emerald-300 text-xs font-black text-slate-950">
                                S
                            </span>
                        )}

                        <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user"
                                    ? "bg-emerald-300 text-slate-950"
                                    : "border border-white/10 bg-slate-800 text-slate-200"
                                }`}
                        >
                            {message.content}
                        </div>
                    </div>

                ))}

                {pending && (
                    <div className="flex items-center gap-3">
                        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-emerald-300 text-xs font-black text-slate-950">
                            S
                        </span>

                        <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-slate-800 px-4 py-4">
                            <span className="size-1.5 animate-bounce rounded-full bg-slate-400" />
                            <span className="[animation-delay:120ms] size-1.5 animate-bounce rounded-full bg-slate-400" />
                            <span className="[animation-delay:240ms] size-1.5 animate-bounce rounded-full bg-slate-400" />
                        </div>
                    </div>
                )}
            </div>

            {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {suggestedQuestions.map((question) => (
                        <button
                            key={question}
                            type="button"
                            onClick={() => sendMessage(question)}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-emerald-300/30 hover:text-white"
                        >
                            {question}
                        </button>
                    ))}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="flex gap-3 border-t border-white/10 pt-4"
            >        <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask a support question..."
                    aria-label="Support question"
                    disabled={pending}
                    className="h-14 min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-300/40"
                />


                <button
                    type="submit"
                    disabled={!input.trim() || pending}
                    aria-label="Send message"
                    className="size-14 shrink-0 rounded-2xl bg-emerald-300 text-xl font-bold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-30"
                >
                    →
                </button>
            </form>

            <p className="pt-3 text-xs text-slate-500">
                Prototype responses are local. Real AI generation comes later.
            </p>
        </div>
    );
}
