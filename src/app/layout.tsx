import './globals.css';
import React from 'react';

export const metadata = {
  title: 'ThevibeSound records',
  description: 'Música y vibración en cada nota'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <head />
      <body style={{ margin:0, fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
        {children}
      </body>
    </html>
  );
}
