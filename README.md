# Josh Krol - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- Modern, clean design with smooth animations
- Fully responsive layout
- Dark theme with gradient accents
- Sections: Hero, About, Skills, Experience, Projects, Contact
- Animated components using CSS animations
- SEO optimized

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, CSS Animations
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer
│   └── index.ts         # Component exports
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
└── package.json
```

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom primary colors
  },
  dark: {
    // Your custom dark theme colors
  },
}
```

### Content

Update the data in each component file to customize:
- Personal information
- Skills and technologies
- Work experience
- Projects

## Deployment

This portfolio can be easily deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with Next.js and Tailwind CSS
