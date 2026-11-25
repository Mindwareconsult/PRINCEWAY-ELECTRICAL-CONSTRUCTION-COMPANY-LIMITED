export type PageId = 'home' | 'about' | 'services' | 'projects' | 'process' | 'contact';

export type ServiceCategory =
  | 'Electrical Engineering'
  | 'Building Construction'
  | 'Borehole Drilling';

export interface ServiceItem {
  id: string;
  number: string;
  title: ServiceCategory;
  headline: string;
  shortDesc: string;
  fullDesc: string[];
  scope: string[];
  considerations: string[];
  ctaLabel: string;
  visualCategory: 'electrical' | 'building' | 'borehole';
  imageUrl?: string;
}

export interface ProjectMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  caption: string;
  sourceFilename?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ServiceCategory;
  location: string;
  status: 'Active Documentation' | 'Completed Work' | 'Site Record';
  completionDate?: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  galleryImages: string[];
  objectPosition?: 'center' | 'top' | 'upper';
  videoUrl?: string;
  videoTitle?: string;
  linkedVideoIds?: string[];
  featuredOnHome?: boolean;
  expectedAssetHint?: string;
  isCustomUpload?: boolean;
}

export interface VideoGalleryItem {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  youtubeId?: string;
  youtubeUrl?: string;
  isShort?: boolean;
  featured?: boolean;
  projectId?: string;
  videoUrl: string;
  posterUrl?: string;
  sourceFilename: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  reviewText: string;
  source: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  keyFocus: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectLocation: string;
  description: string;
}
