import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Nexus Banking App',
    category: 'UI/UX',
    description: 'Modern banking interface with seamless user experience',
    longDescription: 'A comprehensive banking application redesign focusing on user experience and accessibility. The project included extensive user research, wireframing, and high-fidelity prototyping to create an intuitive digital banking platform.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Figma', 'Principle', 'Adobe XD'],
    year: '2024',
    client: 'Nexus Financial',
    featured: true
  },
  {
    id: '2',
    title: 'EcoTech Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity for sustainable technology company',
    longDescription: 'A comprehensive brand identity project for EcoTech, including logo design, color palette, typography, and brand guidelines. The project emphasized sustainability and innovation through clean, modern design elements.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Illustrator', 'Photoshop', 'InDesign'],
    year: '2024',
    client: 'EcoTech Solutions',
    featured: true
  },
  {
    id: '3',
    title: 'Wellness Mobile App',
    category: 'UI/UX',
    description: 'Mindfulness and wellness tracking application',
    longDescription: 'A mobile application design focused on mental wellness and mindfulness tracking. The project included user journey mapping, interaction design, and creating a calming, accessible interface for daily wellness practices.',
    image: 'https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183175/pexels-photo-3183175.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Sketch', 'Principle', 'Zeplin'],
    year: '2023',
    featured: false
  },
  {
    id: '4',
    title: 'ArtSpace Gallery',
    category: 'Web Design',
    description: 'Contemporary art gallery website redesign',
    longDescription: 'A complete website redesign for ArtSpace Gallery, featuring a clean, minimalist design that puts the artwork at the forefront. The project included responsive design, interactive galleries, and artist portfolio sections.',
    image: 'https://images.pexels.com/photos/3183179/pexels-photo-3183179.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3183179/pexels-photo-3183179.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183188/pexels-photo-3183188.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183191/pexels-photo-3183191.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    year: '2023',
    client: 'ArtSpace Gallery',
    featured: true
  },
  {
    id: '5',
    title: 'FoodieApp Restaurant',
    category: 'UI/UX',
    description: 'Food delivery app with social features',
    longDescription: 'A food delivery application with integrated social features, allowing users to share recommendations and reviews. The design focused on creating an engaging, community-driven experience while maintaining ease of use for ordering.',
    image: 'https://images.pexels.com/photos/3183194/pexels-photo-3183194.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3183194/pexels-photo-3183194.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183196/pexels-photo-3183196.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183201/pexels-photo-3183201.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Figma', 'Framer', 'Adobe XD'],
    year: '2023',
    featured: false
  },
  {
    id: '6',
    title: 'TechFlow Startup',
    category: 'Branding',
    description: 'Complete brand identity for tech startup',
    longDescription: 'A comprehensive branding project for TechFlow, a software development startup. The project included logo design, brand guidelines, business card design, and website branding elements with a focus on professionalism and innovation.',
    image: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183204/pexels-photo-3183204.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Illustrator', 'Photoshop', 'Figma'],
    year: '2023',
    client: 'TechFlow Inc.',
    featured: false
  }
];

export const categories = ['All', 'UI/UX', 'Branding', 'Web Design'];