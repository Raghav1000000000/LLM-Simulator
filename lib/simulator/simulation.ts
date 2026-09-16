import type { AttentionCell, Prediction, Token } from "./types";

export function attentionCells(tokens: Token[]): AttentionCell[] {
  const size = Math.min(tokens.length, 8);
  return tokens.slice(0, size).flatMap((_, row) => tokens.slice(0, size).map((__, column) => ({
    row, column, id: `attention-${tokens[row].id}-${tokens[column].id}-${row}-${column}`,
    value: row === column ? 0.8 : Math.max(0.04, 0.55 - Math.abs(row - column) * 0.11 + ((row * 7 + column * 3) % 10) / 100)
  })));
}

export const predictions: Prediction[] = [
  { token: "is", probability: 31 }, { token: "a", probability: 24 }, { token: "the", probability: 14 },
  { token: "way", probability: 9 }, { token: "type", probability: 7 }, { token: "field", probability: 5 }
];

const predictionTotal = predictions.reduce((total, prediction) => total + prediction.probability, 0);
export const normalizedPredictions = predictions.map(prediction => ({
  ...prediction,
  probability: Math.round(prediction.probability / predictionTotal * 100)
}));