import type { ReactNode } from "react";

export function Lang({ zh, en }: { zh: ReactNode; en: ReactNode }) {
  return (
    <>
      <span className="lang langZh">{zh}</span>
      <span className="lang langEn">{en}</span>
    </>
  );
}
