import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "TheVibeSound Records",
  description: "Música y vibración en cada nota",
  openGraph: { title: "TheVibeSound Records", description: "Música y vibración en cada nota", images: ["/assets/cover.jpg"] }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <div className="container">
            <div className="brand">
              <div className="logo" aria-hidden="true" />
              <h1>TheVibe Sound records</h1>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container"><small>© TheVibeSound Records</small></div>
        </footer>
      </body>
    </html>
  )
}
