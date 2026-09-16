"use client";
import { motion } from "framer-motion";
import TransformerSvg from "./TransformerSvg";
import QKVVisualization from "./QKVVisualization";
export default function TransformerVisualization({ technical, selected, onSelect }: { technical: boolean; selected: number | null; onSelect: (index: number) => void }) {
  const blocks = technical ? ["Input representation", "LayerNorm", "Multi-Head Attention", "Residual connection", "LayerNorm", "MLP / FFN", "Residual connection", "Output representation"] : ["Understand context", "Look at relationships", "Transform information", "Pass to next layer", "Repeat"];
  return <div className="flex h-[480px] flex-col justify-center"><div className="h-[340px] w-full"><TransformerSvg selected={selected} onSelect={onSelect} /></div>{technical && <QKVVisualization />}</div>;
}