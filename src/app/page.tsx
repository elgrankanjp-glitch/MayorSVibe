import Link from "next/link";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import ReleasesList from "@/components/ReleasesList";
import { NewsletterForm } from "@/components/NewsletterForm";
import { capabilityCards, heroStats, siteConfig } from "@/config/site";

const platformMarks = [
  "Spotify",
  "Apple Music",
  "TikTok",
  "YouTube Music",
  "Amazon Music",
  "Beatport",
  "Instagram Reels",
  "Shazam",
];

const audienceCards = [
  {
    className: "audience-card audience-card--artists",
    eyebrow: "Ruta artista",
    title: "Distribucion, publishing y growth para artistas que quieren salir con criterio.",
    copy: "Subidas, metadata, splits, identidad visual y campañas en una sola experiencia. La web deja claro que puede hacer el sello por el artista antes de pedirle nada.",
    cta: "Entrar como artista",
    href: "/contacto",
  },
  {
    className: "audience-card audience-card--public",
    eyebrow: "Ruta publico",
    title: "Descubrimiento musical con una estética editorial más cercana a Apple Music que a una landing genérica.",
    copy: "Noticias, lanzamientos, escucha, listas y captación de comunidad con una lectura limpia, elegante y mucho más dinámica que la versión actual.",
    cta: "Explorar catalogo",
    href: "/catalogo",
  },
];

const launchSteps = [
  {
    step: "01",
    title: "Preparar salida",
    copy: "Artwork, identidad visual, copy, metadata y fechas definidos en una narrativa ordenada para que la home venda profesionalidad desde el primer scroll.",
  },
  {
    step: "02",
    title: "Activar monetizacion",
    copy: "Planes visibles, publishing claro y formularios de captación desde la propia home para convertir visitas en leads o clientes reales.",
  },
  {
    step: "03",
    title: "Escalar audiencia",
    copy: "Lanzamientos, catálogo vivo y experiencia editorial para que el público vuelva y no se quede en una sola visita superficial.",
  },
];

const pricingPlans = [
  {
    name: "VIBE PRO",
    price: "9,99 €",
    period: "por lanzamiento",
    href: "https://buy.stripe.com/14AfZgbhQ1wda37eXjaZi05",
    badge: "Entrada",
    features: [
      "Distribucion base en plataformas clave",
      "Checklist de metadata y activos",
      "Pagina de lanzamiento y soporte inicial",
    ],
  },
  {
    name: "VIBE LABEL",
    price: "29,99 €",
    period: "por mes",
    href: "https://buy.stripe.com/28E7sKbhQ6Qx1wBcPbaZi04",
    badge: "Mas elegido",
    featured: true,
    features: [
      "Roster activo y multiples artistas",
      "Publishing, splits y estrategia de growth",
      "Mejor equilibrio entre diseño, negocio y salida",
    ],
  },
  {
    name: "VIBE ENTERPRISE",
    price: "99,99 € / mes",
    href: "https://buy.stripe.com/aFafZg85EeiZdfj2axaZi03",
    badge: "Operacion total",
    features: [
      "Infraestructura para sello y partners",
      "Operacion editorial y publishing avanzada",
      "Soporte prioritario y funnels premium",
    ],
  },
];

export default function Page() {
  const encodedUrl = encodeURIComponent(siteConfig.url);
  const encodedTitle = encodeURIComponent("Thevibe Sound Records");

  return (
    <div className="page-shell page-shell--home">
      <NavBar />

      <main>
        <section className="hero-experience">
          <div className="wrap hero-experience-grid">
            <div className="hero-story card">
              <span className="eyebrow">Apple Music clarity × TuneCore conversion</span>
              <h1 className="hero-story-title">
                Lanza, monetiza y posiciona tu universo con una web <span className="gradient-text">mucho más elegante, visual y ordenada</span>.
              </h1>
              <p className="hero-story-lead">
                Esta versión organiza la experiencia como una mezcla de sello, plataforma de distribución y escaparate editorial. El objetivo no es solo verse premium: es captar artistas, público y partners sin choques visuales ni textos superpuestos.
              </p>

              <div className="hero-proof-list">
                <div className="hero-proof-item"><span className="hero-proof-dot" />Distribucion y publishing visibles desde el primer bloque</div>
                <div className="hero-proof-item"><span className="hero-proof-dot" />Experiencia separada para artista y público</div>
                <div className="hero-proof-item"><span className="hero-proof-dot" />Planes y captación activos sin romper el diseño</div>
              </div>

              <div className="btn-row">
                <Link className="btn-primary" href="/#planes">Ver planes</Link>
                <Link className="btn-secondary" href="/contacto">Hablar con el sello</Link>
              </div>
            </div>

            <div className="hero-media-stack">
              <article className="hero-media-card hero-media-primary">
                <div className="hero-media-copy">
                  <p className="hero-media-kicker">Visual principal</p>
                  <h2>Un frente más limpio, más musical y con jerarquía real.</h2>
                  <p>Fondos con imagen, lectura estable y bloques pensados para que el usuario entienda en segundos qué puede hacer aquí.</p>
                </div>
              </article>

              <div className="hero-mini-grid">
                {heroStats.map((item) => (
                  <article key={item.label} className="hero-mini-card">
                    <p className="hero-mini-value gradient-text">{item.value}</p>
                    <p className="hero-mini-label">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="wrap platform-marquee">
            {platformMarks.map((platform) => (
              <span key={platform} className="platform-chip">{platform}</span>
            ))}
          </div>
        </section>

        <section className="section" id="audiencias">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Experiencia ordenada</span>
              <h2 className="section-title">La web se divide en recorridos claros y deja de sentirse como una sola portada oscura.</h2>
              <p className="section-copy">La estructura correcta empieza por separar necesidades: artista, público y negocio. Así evitamos saturación, textos cruzados y una home sin foco.</p>
            </div>

            <div className="audience-grid">
              {audienceCards.map((item) => (
                <article key={item.title} className={item.className}>
                  <div className="audience-card-copy">
                    <p className="mosaic-label">{item.eyebrow}</p>
                    <h3 className="audience-title">{item.title}</h3>
                    <p className="card-copy">{item.copy}</p>
                    <Link className="audience-link" href={item.href}>{item.cta}</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band" id="services">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Servicios visibles</span>
              <h2 className="section-title">Fusión de estética editorial y función comercial.</h2>
              <p className="section-copy">Aquí se mezclan lo mejor de Apple Music y TuneCore: limpieza visual, lectura rápida, venta clara de servicios y sensación de producto real.</p>
            </div>

            <div className="card-grid">
              {capabilityCards.map((item) => (
                <article key={item.title} className="info-card">
                  <div className="info-icon">{item.icon}</div>
                  <h3 className="info-title">{item.title}</h3>
                  <p className="info-copy">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight" id="planes">
          <div className="wrap launch-grid">
            <article className="launch-panel card">
              <div className="section-head" style={{ marginBottom: "1.25rem" }}>
                <span className="eyebrow">Plan de lanzamiento</span>
                <h2 className="section-title">La web ya puede salir rápido si ordenamos salida, cobro y captación.</h2>
              </div>

              <div className="launch-step-list">
                {launchSteps.map((item) => (
                  <article key={item.step} className="launch-step">
                    <span className="launch-step-tag">{item.step}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="card-copy">{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <article className="pricing-stack">
              {pricingPlans.map((plan) => (
                <div key={plan.name} className={plan.featured ? "plan-shell plan-shell--featured" : "plan-shell"}>
                  <div className="plan-shell-head">
                    <span className="plan-badge">{plan.badge}</span>
                    <h3>{plan.name}</h3>
                    <p className="plan-price">{plan.price}</p>
                    {plan.period ? <p className="plan-period">{plan.period}</p> : null}
                  </div>

                  <div className="plan-list">
                    {plan.features.map((feature) => (
                      <p key={feature}>{feature}</p>
                    ))}
                  </div>

                  <a className="btn-primary" href={plan.href} target="_blank" rel="noreferrer">Activar {plan.name}</a>
                </div>
              ))}
            </article>
          </div>
        </section>

        <section className="section" id="releases">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Lanzamientos</span>
              <h2 className="section-title">La parte publica ya funciona como escaparate de releases.</h2>
              <p className="section-copy">He dejado una base de lanzamientos viva conectada a la API del proyecto para que la web no sea solo visual, sino util desde el primer dia.</p>
            </div>

            <ReleasesList />
          </div>
        </section>

        <section className="section-tight">
          <div className="wrap feature-banner">
            <div className="feature-banner-copy">
              <span className="eyebrow">Experiencia visual</span>
              <h2 className="section-title">Menos oscuridad plana. Más ritmo visual, imágenes reales y bloques con aire.</h2>
              <p className="section-copy">La home ahora se comporta como una portada de producto musical: fondos con presencia, tipografía controlada y llamadas a la acción que no compiten entre sí.</p>
            </div>

            <div className="feature-banner-visual">
              <div className="feature-banner-panel feature-banner-panel--og" />
              <div className="feature-banner-panel feature-banner-panel--cover" />
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="wrap glass-card surface-panel">
            <div className="section-head" style={{ marginBottom: "1.5rem" }}>
              <span className="eyebrow">Captacion</span>
              <h2 className="section-title">Suscripción y contacto sin romper la armonía visual.</h2>
              <p className="section-copy">Deja preparado el cierre de conversión para artistas, público y partners. La web queda lista para lanzarse rápido y conectar después con CRM o Supabase.</p>
            </div>

            <NewsletterForm />
          </div>
        </section>

        <aside className="floating-dock" aria-label="Accesos rapidos">
          <a className="floating-radio" href="/releases" aria-label="T Radio Vibe">
            <span className="floating-radio-icon">◉</span>
            <span>T Radio Vibe</span>
          </a>

          <div className="floating-share" aria-label="Compartir">
            <a
              href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noreferrer"
              className="floating-share-btn"
              aria-label="Compartir en X"
            >
              X
            </a>
            <a
              href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
              target="_blank"
              rel="noreferrer"
              className="floating-share-btn"
              aria-label="Compartir en WhatsApp"
            >
              WA
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noreferrer"
              className="floating-share-btn"
              aria-label="Compartir en Facebook"
            >
              FB
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noreferrer"
              className="floating-share-btn"
              aria-label="Compartir en LinkedIn"
            >
              IN
            </a>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}


