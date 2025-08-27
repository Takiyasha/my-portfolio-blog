import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string }>;

export default function Container({ children, className = "" }: Props) {
  // 1440px canvas centered, with side padding
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
