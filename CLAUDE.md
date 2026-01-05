# CLAUDE.md - Project Context for AI Assistants

## Project Overview
**Name**: Edhumbling Portfolio  
**Type**: Personal portfolio website / life log  
**Stack**: Next.js 16 (App Router), TypeScript, BaseUI + Styletron

## Design System: "Militant Knife Edge"
- **Palette**: Void Black (`#000000`), Gunmetal (`#0a0a0a`), Carbon (`#111111`), Core White (`#ffffff`)
- **Aesthetic**: Sharp, technical, tactical. NO rounded corners (0px border-radius enforced globally).
- **Typography**: Noto Sans. Uppercase headings, wide letter-spacing (`0.05em`+).
- **UI Patterns**: 1px borders, grid overlays, diagonal slice effects, corner markers.

## File Structure
```
app/
├── globals.css     # Design tokens, reset, utilities (`.knife-edge-box`, `.bg-grid`)
├── layout.tsx      # Root layout, Noto Sans font, Providers wrapper
├── page.tsx        # Home page (Hero, Log, About sections)
├── providers.tsx   # Styletron + BaseUI theme provider
public/             # Static assets
```

## Key Conventions
1. **Styletron CSS-in-JS**: Use `useStyletron()` hook for component styles.
2. **No Tailwind**: Do not use Tailwind CSS. All styling via Styletron or `globals.css`.
3. **Strict Edges**: All UI elements must have squared corners. Avoid any soft/rounded designs.
4. **Technical Vibe**: Use system-like language ("Sys.Status", "Entity loading...").

## Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## Current State
- [x] Project initialized (Next.js + BaseUI)
- [x] Militant design system implemented
- [x] Home page structure complete (Hero, Log, About)
- [x] Projects page created (/projects)
- [x] SSR/Hydration issues resolved (StyletronRegistry)
- [ ] Content to be provided by user

---
*Last updated: 2026-01-04*
