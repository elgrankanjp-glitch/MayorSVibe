# MayorSVibe Failsafe Plan (Artista + Publico)

## Objetivo operativo

- Convertir visitas en suscriptores y leads de artist onboarding.
- Mantener la experiencia funcional incluso si un servicio externo falla.
- URL operativa actual: https://mayorsvibe.vercel.app

## Arquitectura de perfiles

### Perfil Artista

- Entrada principal: /contacto + CTA "Hablar con A&R".
- Flujo: Home -> Servicios -> Planes -> Contacto.
- Datos minimos: nombre, email, area, mensaje.
- Persistencia:
  - Primaria: Supabase table `contact_leads`.
  - Fallback: memoria en API (sin cortar UX).

### Perfil Publico

- Entrada principal: Home + Releases + Catalogo.
- Flujo: Home -> Releases/Catalogo -> Newsletter.
- Datos minimos: email.
- Persistencia:
  - Primaria: Supabase table `newsletter_subscribers`.
  - Fallback: memoria en API.

## Resiliencia (a prueba de fallos)

1. API fallback activo cuando Supabase no esta disponible.
2. Build CI y Deploy separados para no bloquear hotfixes.
3. Deploy Vercel por push (workflow), con rollback rapido desde Vercel.
4. Validaciones de formulario lado cliente + servidor.
5. Observabilidad minima:
   - estado de respuesta API
   - storage mode devuelto (`supabase` o `memory`)

## KPI iniciales (30 dias)

- Conversion CTA artist -> envio contacto >= 4%
- Conversion newsletter >= 2.5%
- Bounce home < 55%
- Tiempo medio en pagina > 1m 20s

## Checklist de lanzamiento

- [x] Cargar variables env en Vercel
- [ ] Reanudar proyecto Supabase `Thevibesound` en dashboard
- [ ] Ejecutar `supabase/schema.sql` en SQL editor
- [ ] Verificar submit de contacto y newsletter
- [ ] Revisar rutas: /, /catalogo, /releases, /contacto
- [x] Verificar botones compartir y T Radio Vibe
