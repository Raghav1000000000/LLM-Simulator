import type { StageId, Token } from "../../lib/simulator/types";
import PromptVisualization from "./PromptVisualization";
import ContextVisualization from "./ContextVisualization";
import TokenizationVisualization from "./TokenizationVisualization";
import EmbeddingVisualization from "./EmbeddingVisualization";
import AttentionVisualization from "./AttentionVisualization";
import TransformerVisualization from "./TransformerVisualization";
import PredictionVisualization from "./PredictionVisualization";
import OutputVisualization from "./OutputVisualization";

export default function Visualization({ stage, prompt, tokens, technical, selectedToken, selectedBlock, generatedTokens, onSelectToken, onSelectBlock }: { stage: StageId; prompt: string; tokens: Token[]; technical: boolean; selectedToken: number | null; selectedBlock: number | null; generatedTokens: string[]; onSelectToken: (index: number) => void; onSelectBlock: (index: number) => void }) {
  if (stage === "prompt") return <PromptVisualization prompt={prompt} />;
  if (stage === "context") return <ContextVisualization prompt={prompt} />;
  if (stage === "tokens") return <TokenizationVisualization tokens={tokens} onSelect={onSelectToken} />;
  if (stage === "embeddings") return <EmbeddingVisualization tokens={tokens} selected={selectedToken} onSelect={onSelectToken} />;
  if (stage === "attention") return <AttentionVisualization tokens={tokens} selected={selectedToken} onSelect={onSelectToken} />;
  if (stage === "transformer") return <TransformerVisualization technical={technical} selected={selectedBlock} onSelect={onSelectBlock} />;
  if (stage === "prediction") return <PredictionVisualization />;
  return <OutputVisualization generatedTokens={generatedTokens} />;
}