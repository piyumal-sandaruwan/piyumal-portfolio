# Piyumal Sandaruwan — Portfolio

A production-minded Next.js portfolio with a darker cyberpunk + glassmorphism + DevOps aesthetic.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript strict mode
- Tailwind CSS
- Framer Motion
- Lucide React
- Next/Image
- Docker multi-stage build

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Quality checks:

```bash
npm run typecheck
npm run build
npm audit
```

## Docker

```bash
docker compose up --build
```

## Customize your identity

Replace `public/profile.jpg` with your preferred professional photo if needed.

Update:
- `components/sections/Hero.tsx`
- `components/sections/Contact.tsx`
- `data/projects.ts`
- `data/journey.ts`
- `app/layout.tsx`

Replace placeholder GitHub, LinkedIn and email URLs before deployment.

## Animation architecture

- `ScrollReveal` is a reusable Framer Motion viewport component.
- Hero animation is isolated to `Hero.tsx`.
- CSS handles the persistent cyber grid, scanlines, glass, neon and responsive styling.
- `prefers-reduced-motion` is respected both in CSS and Framer Motion.
- The mouse glow is disabled on coarse/mobile pointers.

## Security

- No secrets or API keys in source.
- `.env*` ignored by Git.
- External links use `noopener noreferrer`.
- No `dangerouslySetInnerHTML`.
- Security headers are added by `middleware.ts`.
- CSP blocks object embeds and framing.
- Docker uses a non-root user.
- Docker enables `no-new-privileges` and a read-only filesystem.
- No unnecessary client-side API calls.
- No remote image host is required for the profile image.

Before production:
1. Set `metadataBase` to your real HTTPS domain.
2. Review CSP with your final CDN/analytics configuration.
3. Run `npm audit` and resolve relevant advisories.
4. Add rate limiting and server-side validation if you later add a contact API.
5. Never put private credentials in `NEXT_PUBLIC_*` variables.
