import Image from "next/image"

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-image" aria-hidden="true">
            <Image
              src="/assets/cover.jpg"
              alt="Portada TheVibeSound"
              width={1200}
              height={630}
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div className="hero-content">
            <h1 className="site-title">TheVibe Sound records</h1>
            <p className="lead">Música y vibración en cada nota</p>
            <div className="actions">
              <a className="btn primary" href="/catalogo">Explorar catálogo</a>
              <a className="btn ghost" href="/contacto">Contacto</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
