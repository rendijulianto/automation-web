export type Language = 'id' | 'en';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image?: string;
  tech: string[];
  link?: string;
  version?: string;
}

export interface ApiEndpoint {
  id: string;
  name: string;
  description: string;
  method: 'GET' | 'POST';
  url: string;
  category: string;
  rateLimit: string;
  params: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  exampleResponse: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact',
}