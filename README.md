# Luke Stevens | Junior Front-End Developer Portfolio

This is a [Next.js](https://nextjs.org) portfolio project for Luke Stevens, a junior front-end developer based in Ipswich, seeking roles in Essex, Suffolk, and London. The site showcases technical and soft skills, featured projects, a weather widget, and a contact form.

## Features

- **Modern Tech Stack:** Next.js, React, TypeScript, SCSS/SASS, Luxon, Lucide Icons
- **Responsive Design:** Fully responsive layout using CSS Grid and Flexbox
- **Accessible UI:** Semantic HTML, ARIA, and accessible navigation
- **Weather Widget:** Live weather and time for any city (powered by WeatherAPI)
- **Contact Form:** Send messages directly to Luke via email (using Resend API)
- **Project Carousel:** Browse featured projects with images and links
- **Downloadable CV:** View or download CV as PDF

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local` (if provided)
   - Add your API keys:
     ```
     NEXT_PUBLIC_WEATHER_API_KEY=your_weatherapi_key
     RESEND_API_KEY=your_resend_api_key
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `src/app/` - Next.js app directory (pages, layout, API routes)
- `src/components/` - Reusable React components (Header, Footer, ContactForm, WeatherWidget, WorkCarousel, etc.)
- `src/styles/` - Global and variables CSS
- `public/` - Static assets (images, robots.txt, sitemap.xml, CV PDF)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License

This project is private and for portfolio use only.

---

**Contact:** [luke@lstevens.dev](mailto:luke@lstevens.dev)  
**GitHub:** [ls99555](https://github.com/ls99555)  
**LinkedIn:** [Luke Stevens](https://www.linkedin.com/in/luke-stevens-a117bab5/)
