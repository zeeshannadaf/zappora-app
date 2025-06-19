import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Zappora',
  description: 'From Prompt to Product in a Zap',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}