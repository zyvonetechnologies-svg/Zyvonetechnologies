# Zyvone — Agency Landing Page

A modern, minimal agency landing page built with **React + Vite**.

## Tech Stack
- React 18
- Vite 5
- Plain CSS (no Tailwind dependency — all styles in `src/styles/globals.css`)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## Build for Production
```bash
npm run build
# Output in /dist
```

## Project Structure
```
zyvone/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root — composes all sections
    ├── styles/
    │   └── globals.css       # CSS variables, utilities, component styles
    ├── constants/
    │   └── data.js           # All static copy & data arrays
    ├── hooks/
    │   └── useInView.js      # IntersectionObserver scroll-reveal hook
    └── components/
        ├── ui/
        │   └── AnimSection.jsx   # Reusable scroll-reveal wrapper
        └── sections/
            ├── Navbar.jsx
            ├── Hero.jsx
            ├── WhyUs.jsx
            ├── Services.jsx
            ├── Projects.jsx
            ├── Testimonial.jsx
            ├── Team.jsx
            ├── FAQ.jsx
            ├── Contact.jsx
            └── Footer.jsx
```

## Customisation
| What to change | Where |
|---|---|
| Brand copy & data | `src/constants/data.js` |
| Colors / fonts | `src/styles/globals.css` (CSS variables) |
| Section layout | Individual file in `src/components/sections/` |
| Scroll-reveal timing | `AnimSection` `delay` prop or `useInView` threshold |
