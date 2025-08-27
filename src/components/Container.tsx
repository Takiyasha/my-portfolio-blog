// src/components/Container.tsx
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-12 gap-4">
      {children}
    </div>
  );
}
