import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
}