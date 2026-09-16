"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GenerationLoopSvg from "./GenerationLoopSvg";
export default function OutputVisualization({ generatedTokens }: { generatedTokens: string[] }) {
  const text = "Quantum computing is a type of computing that uses quantum-mechanical effects to process information. It is useful for certain problems where quantum algorithms can offer different approaches from classical computers.";
  return <div className="flex h-[480px] flex-col items-center justify-center gap-2"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl rounded-3xl border border-emerald-300/20 bg-emerald-300/[.04] p-7"><div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300"><Sparkles size={15} /> EDUCATIONAL SIMULATION OUTPUT</div><p className="text-lg leading-8 text-slate-200">{generatedTokens.length ? generatedTokens.join("") : text}</p><div className="mt-6 border-t border-white/[.07] pt-4 text-[11px] text-slate-600">Next token → append → new context → repeat. This is a local simulated response, not neural-network output.</div></motion.div><div className="h-24 w-full max-w-2xl"><GenerationLoopSvg /></div></div>;
}