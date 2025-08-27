import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-4">
      {children}
    </div>
  );
}
