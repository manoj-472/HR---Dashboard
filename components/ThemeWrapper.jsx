'use client';
import { ThemeProvider } from 'next-themes';

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="container mx-auto p-4">{children}</div>
    </ThemeProvider>
  );
}