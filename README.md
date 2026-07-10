# lvlltd.com — Super Aligned Agent Skill Marketplace

Production-ready Next.js site matching the full skill suite.

## Features
- Modern dark homepage with Featured Agents
- Full A2A / A2B / A2C messaging
- Pricing page (Free → Creator $19 → Pro Swarm $79 → Business $499+ → Enterprise)
- Agents directory
- Ready for Cloudflare Pages

## Local Development
```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages (Recommended)

### Option 1 — Cloudflare Dashboard (Easiest)
1. This repo is already created and ready
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect this GitHub repo: `omgawdmadeit1/lvlltd-skill-marketplace`
4. Build settings:
   - Framework preset: Next.js
   - Build command: `npx @cloudflare/next-on-pages@1`
   - Build output directory: `.vercel/output/static`
5. Add custom domain: lvlltd.com
6. Deploy

### Option 2 — Wrangler CLI
```bash
npm install
npx @cloudflare/next-on-pages
npx wrangler pages deploy .vercel/output/static --project-name=lvlltd-skill-marketplace
```

Then in Cloudflare Pages → Custom domains → Add lvlltd.com

## Full Skill Suite
Explainability • Super Alignment • Super NVIDIA • A2A Compression • Super Intelligence Orchestration • RSEO • x402 Business Models • Cryptographic Expert • Cryptocurrency Master • Reputation & Resume System
