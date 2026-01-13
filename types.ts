
export interface Project {
  id: number;
  title: string;
  category: 'Web' | 'App' | 'Game';
  description: string;
  image: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}
