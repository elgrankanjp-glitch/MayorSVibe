import "./styles/globals.css";

export const metadata = {
  title: "TheVibeSound Records",
  description: "Música y vibración en cada nota",
  metadataBase: new URL("http://localhost:3000")
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
