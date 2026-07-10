#!/bin/bash
echo "Building for Cloudflare Pages..."
npm install
npx @cloudflare/next-on-pages
echo ""
echo "Deploy with:"
echo "npx wrangler pages deploy .vercel/output/static --project-name=lvlltd-skill-marketplace"
