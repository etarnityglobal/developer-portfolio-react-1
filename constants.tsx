
import React from 'react';
import { Project, Skill, Service, Experience } from './types';

export const SERVICES: Service[] = [
  {
    title: "Website Development",
    description: "Crafting premium, high-performance web experiences using modern frameworks like React, Next.js, and TypeScript with elegant UI/UX.",
    icon: "fa-solid fa-code",
    color: "bg-premium-blue text-brand-blue"
  },
  {
    title: "App Development",
    description: "Building scalable and intuitive native/cross-platform mobile applications for iOS and Android using Flutter and React Native.",
    icon: "fa-solid fa-mobile-screen-button",
    color: "bg-premium-pink text-brand-pink"
  },
  {
    title: "Game Development",
    description: "Developing immersive 2D and 3D gaming experiences using Unity and Unreal Engine, focused on performance and engaging mechanics.",
    icon: "fa-solid fa-gamepad",
    color: "bg-premium-purple text-brand-purple"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, icon: "fa-brands fa-react" },
  { name: "Node.js / Express", level: 90, icon: "fa-brands fa-node-js" },
  { name: "Flutter / Dart", level: 88, icon: "fa-solid fa-mobile" },
  { name: "Unity / C#", level: 85, icon: "fa-brands fa-unity" },
  { name: "TypeScript", level: 92, icon: "fa-solid fa-code" },
  { name: "Tailwind CSS", level: 96, icon: "fa-solid fa-palette" }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nexus Enterprise CMS",
    category: "Web",
    description: "A luxury content management system for corporate entities with real-time analytics.",
    image: "https://picsum.photos/seed/web1/800/600",
    tags: ["React", "Firebase", "Tailwind"]
  },
  {
    id: 2,
    title: "Aura Health & Fitness",
    category: "App",
    description: "High-performance fitness tracking app with AI-driven personalized workouts.",
    image: "https://picsum.photos/seed/app1/800/600",
    tags: ["Flutter", "GraphQL", "Node.js"]
  },
  {
    id: 3,
    title: "Galactic Quest: Origins",
    category: "Game",
    description: "A fast-paced 2D platformer with rich narratives and fluid mechanics.",
    image: "https://picsum.photos/seed/game1/800/600",
    tags: ["Unity", "C#", "Spine 2D"]
  },
  {
    id: 4,
    title: "Vivid UI Framework",
    category: "Web",
    description: "An open-source library of high-end UI components for premium dashboards.",
    image: "https://picsum.photos/seed/web2/800/600",
    tags: ["TypeScript", "Next.js", "Radix"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2021 - Present",
    role: "Senior Full Stack Lead",
    company: "TechNova Solutions",
    description: "Leading a team of developers to build enterprise-scale web and mobile applications."
  },
  {
    period: "2018 - 2021",
    role: "Senior Game Developer",
    company: "Lumina Interactive",
    description: "Spearheaded the development of multiple award-winning mobile games with 1M+ downloads."
  },
  {
    period: "2015 - 2018",
    role: "Full Stack Developer",
    company: "Creative Pixels",
    description: "Designed and developed high-traffic e-commerce platforms and brand websites."
  }
];
