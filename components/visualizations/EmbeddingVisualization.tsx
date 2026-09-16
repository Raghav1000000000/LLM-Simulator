"use client";
import { motion } from "framer-motion";
import { embeddingPoints } from "../../lib/simulator/tokenizer";
import type { Token } from "../../lib/simulator/types";
import EmbeddingSpaceSvg from "./EmbeddingSpaceSvg";
export default function EmbeddingVisualization({ tokens, selected, onSelect }: { tokens: Token[]; selected: number | null; onSelect: (index: number) => void }) {
  const points = embeddingPoints(tokens);
  return <div className="flex h-[480px] flex-col justify-center"><div className="mb-3 text-center text-xs text-slate-500">Illustrative 2D projection. Coordinates and vectors are not actual model embeddings.</div><div className="mx-auto h-[360px] w-full max-w-3xl rounded-2xl border border-white/10 bg-black/10"><EmbeddingSpaceSvg points={points} selected={selected} onSelect={onSelect} /></div></div>;
}