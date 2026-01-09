import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music Producer Lab - Learn Music Production Online',
  description: 'Interactive music production learning platform with 175 hands-on lessons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/mpl-favicon.svg" />
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
