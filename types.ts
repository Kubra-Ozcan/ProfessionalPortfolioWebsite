import { LucideIcon } from 'lucide-react';

export interface Article {
  label: string;
  url: string;
  lang: 'en' | 'tr';
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  category: string;
  demoUrl?: string;
  repoUrl?: string;
  // Fields for modal details
  technologies: string[];
  link?: string;
  github?: string;
  articles?: Article[];
}

export interface ProjectCategory {
  id: string;
  title: string;
  count: number;
  description: string;
  gradient: string;
  borderColor?: string;
  shadowColor?: string;
  icon: LucideIcon;
  emoji: string;
  path: string;
  projects: ProjectItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
  platform: string;
}