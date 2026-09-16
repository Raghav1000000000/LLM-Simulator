import type { EmbeddingPoint, Token } from "./types";

export function tokenize(text: string): Token[] {
  const clean = text.trim() || "Explain quantum computing simply.";
  const pieces = clean.match(/\s+|[,.!?;:]|[^\s,.!?;:]+/g) ?? [];
  return pieces.filter(piece => !/^\s+$/.test(piece)).slice(0, 12).map((tokenText, index) => ({
    text: tokenText, index,
    id: 1000 + ((tokenText.toLowerCase().charCodeAt(0) || 1) * 37 + index * 113) % 9000,
    x: 12 + (index % 4) * 25, y: 25 + Math.floor(index / 4) * 28
  }));
}

export function embeddingPoints(tokens: Token[]): EmbeddingPoint[] {
  return tokens.slice(0, 10).map(token => ({ id: `embedding-${token.id}-${token.index}`, token: token.text, x: token.x, y: token.y, vector: [token.id / 10000, token.index / 10, (token.id % 97) / 97] }));
}