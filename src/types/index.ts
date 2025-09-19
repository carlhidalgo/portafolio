// Common types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Project types
export interface Project extends BaseEntity {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
}

export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'ai' | 'blockchain' | 'other';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'archived';

// Experience types
export interface Experience extends BaseEntity {
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  location: string;
  technologies: string[];
  achievements: string[];
  type: ExperienceType;
}

export type ExperienceType = 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';

// Skill types
export interface Skill extends BaseEntity {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  color?: string;
  description?: string;
  yearsOfExperience: number;
}

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'mobile' | 'design' | 'tools' | 'other';
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// Contact types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialMedia: SocialMedia[];
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: number;
  yoyo?: boolean;
}

export interface ScrollAnimation {
  trigger: 'onScroll' | 'onHover' | 'onClick';
  direction: 'up' | 'down' | 'left' | 'right' | 'fade';
  distance?: number;
  config: AnimationConfig;
}

// 3D types
export interface ThreeDConfig {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color?: string;
  opacity?: number;
}

export interface ParticleConfig {
  count: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  shape: 'sphere' | 'cube' | 'plane';
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  current: Theme;
  system: boolean;
  transitions: boolean;
}

// API types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
  title?: string;
  subtitle?: string;
  background?: 'default' | 'dark' | 'gradient' | 'pattern';
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  variant?: 'default' | 'featured' | 'minimal';
  hover?: boolean;
}

// Event types
export interface CustomEvent<T = any> extends Event {
  detail: T;
}

export type ScrollDirection = 'up' | 'down';
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Hook return types
export interface UseScrollReturn {
  scrollY: number;
  scrollDirection: ScrollDirection;
  isScrolling: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
}

export interface UseMediaQueryReturn {
  matches: boolean;
  breakpoint: Breakpoint | null;
}

export interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}
