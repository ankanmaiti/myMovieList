import { cn } from "@utils/tailwindMerger";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
