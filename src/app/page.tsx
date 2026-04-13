import Image from "next/image"

export default function Page() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-image">
          <Image src="/assets/cover.jpg" alt="Portada TheVibeSound" width={1200} height={630} priority style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <div className="hero-content">
          <h2>La música que vibra contigo</h2>
          <p className="lead">Música y vibración en cada nota</p>
          <div className="actions">
            <a className="btn primary" href="/catalogo">Explorar catálogo</a>
            <a className="btn ghost" href="/contacto">Contacto</a>
          </div>
        </div>
      </div>
      <section className="features container">
        <article><h3>Artistas</h3><p>Descubre talento emergente y producciones exclusivas.</p></article>
        <article><h3>Producción</h3><p>Servicios de mezcla, master y producción a medida.</p></article>
        <article><h3>Eventos</h3><p>Conciertos y showcases para conectar con la audiencia.</p></article>
      </section>
    </section>
  )
}
