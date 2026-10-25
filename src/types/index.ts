export type StandardPageId = 'home' | 'packing' | 'coverage' | 'contact' | 'privacy' | 'terms';

export type SeoLandingPageId =
  | 'landing-north-riyadh'
  | 'landing-east-riyadh'
  | 'landing-yasmin-malqa'
  | 'landing-storage-riyadh'
  | 'landing-dina-fleet'
  | 'landing-intercity'
  | 'landing-carpentry'
  | 'landing-directory';

export type PageId = StandardPageId | SeoLandingPageId;

export interface SeoLandingPageData {
  id: SeoLandingPageId;
  slug: string;
  keyword: string;
  targetArea: string;
  seoTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  secondaryKeywords: string[];
  startingPrice: string;
  responseTime: string;
  overview: string;
  whyChooseUs: string[];
  keyDistricts?: string[];
  serviceSteps: { title: string; desc: string }[];
  localReview: {
    clientName: string;
    neighborhood: string;
    comment: string;
    rating: number;
  };
  faq: { q: string; a: string }[];
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PackingMaterial {
  id: string;
  name: string;
  useCase: string;
  features: string[];
}

export interface IntercityRoute {
  city: string;
  region: string;
  distanceKm: number;
  estimatedHours: string;
  tripFrequency: string;
}

export interface DistrictZone {
  name: string;
  zone: 'north' | 'east' | 'west' | 'south' | 'center';
  keyDistricts: string[];
  averageResponseTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  district: string;
  serviceType: string;
  rating: number;
  comment: string;
  date: string;
}
