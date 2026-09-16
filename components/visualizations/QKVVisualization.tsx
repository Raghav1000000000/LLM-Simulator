"use client";
import { motion } from "framer-motion";
export default function QKVVisualization() {
  const labels = ["TOKEN", "Query", "Key", "Value", "Attention Scores", "Weighted Values", "Output"];
  return <div className="rounded-2xl border border-[#a99aff]/20 bg-[#7c5cff]/5 p-4"><div className="small-label mb-3">CONCEPTUAL Q/K/V</div><div className="flex flex-wrap items-center justify-center gap-2 text-center">{labels.map((label, index) => <motion.div key={`qkv-${label}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .08 }} className="flex items-center gap-2"><span className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-xs text-slate-300">{label}</span>{index < labels.length - 1 && <span className="text-[#a99aff]">↓</span>}</motion.div>)}</div></div>;
}