"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="system"
    >
      {children}
    </NextThemesProvider>
  );
}
