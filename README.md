# LLM Simulator

An educational, local-first visualization of the conceptual flow from a prompt to a language-model-style response.

## Free Mode

Free Mode is the default and the main feature. It requires no API key, database, cloud service, or paid account. Token IDs, embeddings, attention, transformer steps, probabilities, and generated responses are deterministic educational data produced locally in the browser. After `npm install`, run:

```bash
npm run dev
```

## Optional Real API Mode

Real API Mode is optional and never required for startup or Free Mode. Copy `.env.example` to `.env.local` and provide a provider key:

```bash
LLM_API_KEY=
LLM_MODEL=gpt-4o-mini
```

The key is read only by the server route and is never exposed as `NEXT_PUBLIC_*`. API usage may incur charges depending on the provider and account. Without a key, the UI reports that API mode is not configured and Free Mode remains available.

## Educational disclaimer

This simulator demonstrates the conceptual flow of an LLM. Values such as embeddings, attention weights, Q/K/V representations, and transformer activations are illustrative unless explicitly obtained from a provider API. Free generated answers are simulated templates, not neural-network output.

## Phase 3 visualizations

Native responsive SVG components cover token flow, embedding space, attention graphs, conceptual Q/K/V, transformer blocks, and the autoregressive generation loop. Framer Motion supplies lightweight transitions. No charting library is used.
