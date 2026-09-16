"use client";
import { motion } from "framer-motion";
import type { Token } from "../../lib/simulator/types";
import TokenFlowSvg from "./TokenFlowSvg";
export default function TokenizationVisualization({ tokens, onSelect }: { tokens: Token[]; onSelect: (index: number) => void }) {
  return <div className="flex h-[480px] flex-col justify-center"><div className="mb-3 text-center text-sm text-slate-500">Text is split into token-like units. IDs are simulated for education; actual tokenization depends on the tokenizer and vocabulary.</div><div className="h-[340px] w-full"><TokenFlowSvg tokens={tokens} onSelect={onSelect} /></div><div className="text-center text-[10px] text-slate-600">Click a token to inspect its index and simulated ID.</div></div>;
}