"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { attentionCells } from "../../lib/simulator/simulation";
import type { Token } from "../../lib/simulator/types";
import AttentionGraphSvg from "./AttentionGraphSvg";
export default function AttentionVisualization({ tokens, selected, onSelect }: { tokens: Token[]; selected: number | null; onSelect: (index: number) => void }) {
  return <div className="flex h-[480px] flex-col justify-center"><div className="mb-3 text-center text-xs text-slate-500">Illustrative attention relationships. Line strength is an example weight, not a real model activation.</div><div className="mx-auto h-[360px] w-full max-w-3xl rounded-2xl border border-white/10 bg-black/10"><AttentionGraphSvg tokens={tokens} cells={attentionCells(tokens)} selected={selected} onSelect={onSelect} /></div></div>;
}