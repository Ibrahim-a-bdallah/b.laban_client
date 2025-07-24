"use client";
import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      richColors
      expand={false}
      toastOptions={{
        classNames: {
          toast: "group toast",
          title: "text-sm font-medium",
          description: "text-sm opacity-90",
        },
      }}
    />
  );
}
