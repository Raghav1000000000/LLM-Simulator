"use client";
import { motion } from "framer-motion";
function ContextBox({ title, text, active = false }: { title: string; text: string; active?: boolean }) {
  return <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className={`w-full max-w-xl rounded-2xl border p-4 ${active ? "border-[#7c5cff]/40 bg-[#7c5cff]/10" : "border-white/10 bg-white/[.03]"}`}><div className="text-xs font-bold">{title}</div><div className="mt-1 text-xs text-slate-500">{text}</div></motion.div>;
}
export default function ContextVisualization({ prompt }: { prompt: string }) {
  return <div className="flex h-[480px] flex-col items-center justify-center gap-3"><ContextBox title="System / instructions" text="How the assistant should behave" /><div className="text-slate-600">↓</div><ContextBox title="Conversation context" text="Previous messages + current prompt" /><div className="text-slate-600">↓</div><ContextBox title="Model input" text={prompt || "Your prompt"} active /></div>;
}