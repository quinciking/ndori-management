export interface SocialMetrics {
  instagramFollowers: string;
  tiktokFollowers: string;
  youtubeSubscribers?: string;
  threadsFollowers?: string;
  avgEngagementRate: string;
  monthlyImpressions: string;
  primaryAudienceAge: string;
  topGeos: string[];
  femaleAudiencePercent: number;
}

export interface CampaignHighlight {
  id: string;
  brand: string;
  brandLogoText: string;
  title: string;
  year: string;
  date?: string;
  category: string;
  deliverableType: string;
  reach: string;
  image: string;
  videoUrl?: string;
  description: string;
  rate?: string;
  clientPoc?: string;
  partnerAffiliates?: string;
  prepLevel?: string;
  payStructure?: string;
  relationshipStatus?: string;
  notes?: string;
  contractUrl?: string;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  tagline: string;
  role: string;
  niche: string[];
  location: string;
  bio: string;
  editorialBio: string;
  headshot: string;
  coverImage: string;
  galleryImages: string[];
  metrics: SocialMetrics;
  recentBrands: string[];
  campaigns: CampaignHighlight[];
  rateGuide: {
    dedicatedReel: string;
    integratedVideo: string;
    storySet: string;
    campaignAmbassadorship: string;
  };
  specialties: string[];
  pressMentions: string[];
  featuredQuote: string;
}

export interface BookingInquiry {
  id: string;
  brandName: string;
  contactName: string;
  email: string;
  companyWebsite?: string;
  selectedTalentId: string;
  campaignType: string;
  budgetRange: string;
  targetLaunchDate: string;
  deliverablesRequested: string[];
  projectBrief: string;
  status: 'pending' | 'reviewed' | 'confirmed';
  submittedAt: string;
}

export type TabType = 'home' | 'talent' | 'about' | 'booking';
