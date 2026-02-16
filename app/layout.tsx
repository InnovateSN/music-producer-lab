import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Music Producer Lab - Learn Music Production Online',
  description: 'Interactive music production learning platform with 174 hands-on lessons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/mpl-favicon.svg" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
