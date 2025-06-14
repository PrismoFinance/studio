
import type { ReactNode } from "react";
import Image from "next/image";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <div className="flex flex-col items-center justify-center flex-grow w-full">
        {/* Logo is now inside the children (auth pages) */}
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
      <footer className="w-full text-center py-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Sprout Plant Marketplace. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
