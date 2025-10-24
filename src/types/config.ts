// types/portfolio.ts

export interface WarningConfig {
  noAssigned: string;
}

export interface HeadConfig {
  title: string;
  description: string;
}

export interface NavItem {
  name: string;
  sectionId: string;
}

export interface NavigationConfig {
  nav: {
    experience: NavItem;
    projects: NavItem;
    skills: NavItem;
    aboutMe: NavItem;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
  };
}

interface HeroConfigBtns {
  label: string
  href: string
}

export interface HeroConfig {
  sectionId: string;
  badgeText: string;
  title: string;
  description: string;
  buttons: {
    contactMe: HeroConfigBtns
    linkedIn: HeroConfigBtns
    downloadCv: HeroConfigBtns
  }
}

export interface ExperienceItem {
  image?: string;
  title: string;
  role: string;
  location: string;
  date: string;
  badge?: string;
  description: string[];
}

export interface ExperienceConfig {
  sectionId: string;
  title: string;
  data: ExperienceItem[];
}

export interface ProjectTag {
  name: string;
  icon: string;
  chipClassName: string
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: ProjectTag[];
  github?: string
}

export interface ProjectsConfig {
  sectionId: string;
  title: string;
  data: ProjectItem[];
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface SkillsCategoryConfig {
  sectionId: string;
  title: string;
  data: SkillCategory[];
}

export interface AboutMeConfig {
  sectionId: string;
  title: string;
  data: string; // HTML string
}

export interface FooterLink {
  label: string;
  sectionId: string;
}

export interface FooterConfig {
  copyright: string;
  copyrightText: string;
  authorName: string;
  authorUrl: string;
  links: FooterLink[];
}

export interface PortfolioConfig {
  warnings: WarningConfig;
  head: HeadConfig;
  navigation: NavigationConfig;
  hero: HeroConfig;
  experience: ExperienceConfig;
  projects: ProjectsConfig;
  skillsCategory: SkillsCategoryConfig;
  aboutMe: AboutMeConfig;
  footer: FooterConfig;
}
