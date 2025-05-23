# Tranquil Haven - Wellness Retreat Website

A fully responsive one-page wellness website built using modern web technologies. The design is tranquil, elegant, minimal, and warm—resembling a luxury wellness retreat brochure.

## Features

- **Hero Section**: A calming background with logo placeholder and welcoming CTA
- **Booking Form**: Mock booking system with name, date, service selection
- **Online Shop**: Sample wellness products displayed in cards
- **Testimonials**: Client experiences and quotes
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, minimal design with smooth transitions

## Tech Stack

- **Next.js**: React framework for production
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Vercel**: Deployment platform

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

## Project Structure

- `/components`: UI components
  - `/sections`: Page sections (Hero, Booking, Shop, etc.)
- `/public`: Static assets
  - `/images`: Images and SVGs
- `/src`: Source code
  - `/app`: Next.js app directory
  - `/data`: Mock data

## Customization

The website uses a modular approach for easy customization:
- Color scheme can be modified in `src/app/globals.css`
- Mock data can be updated in `src/data/mockData.ts`
- Component sections can be individually modified

## License

This project is MIT licensed.
