export default function DataBadge({ kind }: { kind: "REAL" | "ILLUSTRATIVE" | "SIMULATED" | "CONCEPTUAL" }) {
  const colors = { REAL: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200", ILLUSTRATIVE: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200", SIMULATED: "border-amber-300/30 bg-amber-300/10 text-amber-200", CONCEPTUAL: "border-[#a99aff]/30 bg-[#7c5cff]/10 text-[#c7bfff]" };
  return <span className={`inline-flex rounded-full border px-2 py-1 text-[10px] font-bold tracking-wider ${colors[kind]}`}>{kind}</span>;
}