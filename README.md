<div align="center">

# ☕ Aura Espresso Bar

**Experience perfection in every sip.**

A modern, high-end landing page and ordering experience for a specialty coffee bar, built with React 19, TypeScript, Vite and Tailwind CSS v4.






![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-Apache--2.0-blue)

<img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/91f900ca-db2a-4227-91ff-809fdb886bab" />
<img width="1917" height="893" alt="image" src="https://github.com/user-attachments/assets/66a4134f-947c-4563-b617-f2e1c5887c45" />
<img width="1912" height="894" alt="image" src="https://github.com/user-attachments/assets/2e21b59e-3e82-45eb-b33b-bf8ff54ab1c5" />
<img width="1912" height="827" alt="image" src="https://github.com/user-attachments/assets/661baf42-cc6a-47fd-b1d1-92c7963faa0c" />
<img width="1090" height="877" alt="image" src="https://github.com/user-attachments/assets/259df4b7-34a6-4149-868f-688c5ef44175" />


</div>

---

## ✨ Overview

Aura Espresso Bar is a single-page web app that combines a luxurious dark-themed marketing site with a fully interactive ordering flow. Visitors can browse the menu, customize drinks, take a mood quiz to get a personalized recommendation, apply promo codes, check out, and even listen to a procedurally generated café soundscape, all in the browser with no backend required.

## 🚀 Features

| Feature | Description |
| --- | --- |
| **Hero & Landing Sections** | Hero, Popular Brews, Why Choose Us, Reviews, and Offers sections with smooth scrolling and ambient glow effects |
| **Full Menu** | Browsable modal with categories: Popular, Espresso, Milk, Cold, and Signature |
| **Drink Customization** | Choose temperature (hot or iced), milk type, sweetness, and an extra ristretto shot, with live price updates |
| **Mood Quiz** | A 3-step quiz (mood, flavor, temperature) that recommends the best drink for you |
| **Order Bag (Cart)** | Slide-out drawer with quantity controls, promo codes, tip selection, tax, and pickup method (counter or dine-in) |
| **Promo Codes** | Apply `AURAFIRST` for 15% off your first order |
| **Order Tracker** | Post-checkout confirmation with pickup code (e.g. `AUR-4821`) and a live "Barista Craft Tracker" timeline |
| **Member Profile** | Loyalty stamp card, saved morning ritual, and one-tap reorder |
| **Ambient Soundscape** | Procedural Web Audio API soundscape (steam hiss, room resonance, ceramic clinks) with volume control, no audio files needed |
| **Glassmorphism UI** | Custom dark coffee-toned theme with animated floating and glow effects |
| **Responsive & Accessible** | Mobile-first layouts, ARIA dialog roles, and labelled controls |

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`) with custom design tokens
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animation:** [Motion](https://motion.dev/)
- **Audio:** Native Web Audio API
- **Fonts:** Cormorant Garamond & Plus Jakarta Sans (Google Fonts)

## 📁 Project Structure

```
aura-espresso-web-app/
├── index.html                  # App entry, meta tags & font loading
├── metadata.json               # App metadata
├── vite.config.ts              # Vite + React + Tailwind config
├── tsconfig.json
├── package.json
├── .env.example                # Environment variable template
└── src/
    ├── main.tsx                # React entry point
    ├── App.tsx                 # Root component & global state (cart, modals, toasts)
    ├── index.css               # Tailwind theme tokens, animations, glass utilities
    ├── assets/images/          # Coffee photography
    ├── data/
    │   └── coffeeData.ts       # Menu items, reviews, "Why choose us" content, types
    ├── utils/
    │   └── ambientCoffeeAudio.ts   # Procedural café soundscape generator
    └── components/
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── PopularBrewsSection.tsx
        ├── WhyChooseUsSection.tsx
        ├── QuizBannerSection.tsx
        ├── ReviewsSection.tsx
        ├── OffersSection.tsx
        ├── Footer.tsx              # Includes the soundscape player
        ├── CartDrawer.tsx
        ├── CustomizeModal.tsx
        ├── FullMenuModal.tsx
        ├── MoodQuizModal.tsx
        ├── ProfileModal.tsx
        └── OrderSuccessModal.tsx
```

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (or [Bun](https://bun.sh/), since a `bun.lock` is included)
- npm, yarn, pnpm, or bun

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Phantom0003/aura-espresso-web-app.git
cd aura-espresso-web-app

# 2. Install dependencies
npm install
# or: bun install

# 3. (Optional) Set up environment variables
cp .env.example .env
```

### Run in development

```bash
npm run dev
```

The app will be available at **http://localhost:3000**.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## 📜 Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Type-check the project with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` and `server.js` |

## 🔐 Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

| Variable | Description |
| --- | --- |
| `APP_URL` | The URL where the app is hosted |

> `.env*` files are git-ignored, except `.env.example`.

## 🎨 Design System

Custom tokens are defined in `src/index.css` using Tailwind v4's `@theme`:

| Token | Value | Usage |
| --- | --- | --- |
| `aura-dark` | `#141211` | Page background |
| `aura-charcoal` | `#1A1716` | Panels & modals |
| `aura-surface` | `#221E1C` | Cards |
| `aura-beige` | `#E6D5B8` | Primary accents & buttons |
| `aura-cream` | `#F5EFEB` | Headings & body text |
| `aura-gold` | `#D6A85B` | Highlights |
| `aura-amber` | `#E28C40` | Warm glow accents |

## 🧭 How It Works

- **State management:** All state (cart, modal visibility, promo code, toast messages) lives in `App.tsx` using React hooks and is passed down via props.
- **Menu data:** Drinks, reviews, and marketing copy are stored in `src/data/coffeeData.ts`. Add or edit a menu item there and it appears across the site.
- **Pricing logic:** Customization add-ons are applied in `CustomizeModal` (alt milk +$0.75, flavored sweetener +$0.50, extra shot +$1.25). The cart applies promo discount, tip, and 8.25% tax.
- **Orders are simulated:** Checkout generates a random order code and shows a progress tracker. There is no payment processing or backend.

## 🗺️ Roadmap Ideas

- [ ] Persist cart and profile with `localStorage`
- [ ] Real backend and payment integration (e.g. Stripe)
- [ ] User authentication and real loyalty tracking
- [ ] Order history
- [ ] Unit and end-to-end tests
- [ ] Deploy to Vercel / Netlify

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the Apache 2.0 License. See `LICENSE` for more information.

## 👤 Author

**Phantom0003**: [GitHub](https://github.com/Phantom0003)

---

<div align="center">
Made with ☕ and React
</div>
