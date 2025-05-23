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

## Deployment to Vercel

This project is configured for simple deployment on Vercel. Follow these steps to deploy:

### Option 1: Deploy from the Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Select the repository
6. Vercel will automatically detect Next.js settings
7. Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Login to your Vercel account:
   ```bash
   vercel login
   ```

3. Navigate to the project directory and deploy:
   ```bash
   cd wellness-site
   vercel
   ```

4. Follow the CLI prompts to complete the deployment

### Configuration for Deployment

This project is already configured for optimal Vercel deployment with:

- `vercel.json` - Vercel-specific configuration
- Image optimization settings for external images
- Proper Next.js configuration for production builds

## Project Structure

- `/components`: UI components
  - `/sections`: Page sections (Hero, Booking, Shop, etc.)
- `/public`: Static assets
  - `/images`: Images and SVGs
- `/src`: Source code
  - `/app`: Next.js app directory
  - `/data`: Mock data
  - `/utils`: Utility functions

## Customization

The website uses a modular approach for easy customization:
- Color scheme can be modified in `src/app/globals.css`
- Mock data can be updated in `src/data/mockData.ts`
- Image sources can be modified in `src/utils/imagePlaceholders.ts`
- Component sections can be individually modified

## License

This project is MIT licensed.
