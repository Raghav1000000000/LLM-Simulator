import type { ReactNode } from "react";
export default function SvgCanvas({ width, height, children, label }: { width: number; height: number; children: ReactNode; label?: string }) {
  return <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" role={label ? "img" : undefined} aria-label={label}>{children}</svg>;
}