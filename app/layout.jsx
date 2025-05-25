import { Inter } from 'next/font/google';
import '../styles/globals.css';
import ThemeWrapper from '../components/ThemeWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HR Performance Dashboard',
  description: 'A dashboard for HR managers to track employee performance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors`}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}