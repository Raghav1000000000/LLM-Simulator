"use client";
import { motion } from "framer-motion";
export default function PromptVisualization({ prompt }: { prompt: string }) {
  return <div className="flex h-[480px] items-center justify-center"><motion.div initial={{ scale: .9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-xl rounded-3xl border border-[#7c5cff]/30 bg-[#7c5cff]/10 p-8 text-center shadow-[0_0_80px_rgba(124,92,255,.12)]"><div className="mb-4 text-xs uppercase tracking-[.2em] text-[#a99aff]">User message</div><div className="text-2xl font-semibold leading-relaxed">&quot;{prompt || "Your prompt"}&quot;</div><div className="mt-5 text-xs text-slate-500">Natural language enters the inference pipeline.</div></motion.div></div>;
}