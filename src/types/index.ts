export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  year: string;
  client?: string;
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}