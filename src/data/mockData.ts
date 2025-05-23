import { productImages, testimonialAvatars } from '../utils/imagePlaceholders';

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Yoga Enthusiast",
    quote: "Tranquil Haven has completely transformed my wellness journey. The serene environment and expert therapists helped me find balance and inner peace. Highly recommended!",
    avatar: testimonialAvatars.female1
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Executive",
    quote: "After months of stress and burnout, my weekend retreat at Tranquil Haven was exactly what I needed. The mindfulness sessions and massage therapy were exceptional.",
    avatar: testimonialAvatars.male1
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Wellness Coach",
    quote: "As someone in the wellness industry, I have high standards, and Tranquil Haven exceeds them all. Their holistic approach to wellness is unmatched in the industry.",
    avatar: testimonialAvatars.female2
  }
];

export const products = [
  {
    id: 1,
    name: "Tranquility Essential Oil Blend",
    description: "A soothing blend of lavender, chamomile, and bergamot to promote relaxation and stress relief.",
    price: 29.99,
    image: productImages.essentialOil
  },
  {
    id: 2,
    name: "Himalayan Salt Bath Soak",
    description: "Hand-harvested pink Himalayan salt infused with essential oils for a rejuvenating bath experience.",
    price: 24.99,
    image: productImages.bathSoak
  },
  {
    id: 3,
    name: "Meditation Cushion Set",
    description: "Ergonomically designed meditation cushion and mat made with organic cotton and natural fillings.",
    price: 59.99,
    image: productImages.meditationCushion
  }
];

export const services = [
  {
    id: 1,
    name: "Deep Tissue Massage",
    duration: "60 min"
  },
  {
    id: 2,
    name: "Aromatherapy Session",
    duration: "45 min"
  },
  {
    id: 3,
    name: "Guided Meditation",
    duration: "30 min"
  },
  {
    id: 4,
    name: "Yoga Class",
    duration: "60 min"
  },
  {
    id: 5,
    name: "Hot Stone Therapy",
    duration: "90 min"
  }
]; 