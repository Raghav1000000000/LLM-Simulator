const defaultAnswer = "This educational simulator shows how a language model can turn a prompt into a response by processing context, token-like pieces, relationships, and repeated next-token choices.";
const answers: Array<{ matches: RegExp; text: string }> = [
  { matches: /sky|blue/i, text: "The sky appears blue because molecules in Earth's atmosphere scatter shorter wavelengths of sunlight more strongly than longer wavelengths." },
  { matches: /quantum/i, text: "Quantum computing is a type of computing that uses quantum-mechanical effects to process information in a different way from classical computers." },
  { matches: /token|language model|llm/i, text: "A language model processes text as token-like pieces, transforms their representations, and repeatedly predicts what could come next." }
];

export function simulatedResponse(prompt: string): string {
  return (answers.find(answer => answer.matches.test(prompt))?.text ?? defaultAnswer).trim();
}

export function responseTokens(prompt: string): string[] {
  return simulatedResponse(prompt).match(/\S+\s*/g) ?? [];
}