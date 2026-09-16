import type { LucideIcon } from "lucide-react";

export type StageId = "prompt" | "context" | "tokens" | "embeddings" | "attention" | "transformer" | "prediction" | "output";
export type SimulationMode = "beginner" | "technical";
export type ExecutionMode = "free" | "api";
export type Token = { text: string; id: number; index: number; x: number; y: number };
export type Stage = { id: StageId; name: string; short: string; icon: LucideIcon; description: string; beginnerExplanation: string; technicalExplanation: string };
export type EmbeddingPoint = { id: string; token: string; x: number; y: number; vector: number[] };
export type AttentionCell = { row: number; column: number; value: number; id: string };
export type Prediction = { token: string; probability: number };
export type SimulationState = { prompt: string; currentStage: StageId; isPlaying: boolean; mode: SimulationMode; executionMode: ExecutionMode; generatedTokens: string[]; selectedTokenIndex: number | null; selectedTransformerBlock: number | null };