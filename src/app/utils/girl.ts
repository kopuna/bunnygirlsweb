export interface PriceDetails {
  shoe: string;
  barefoot: string;
  inshoe: string;
  butt: string;
  breast: string;
  hands: string;
  swallow: string;
  chewing: string;
  fWorship: string;
  fMassage: string;
  anitacids: string;
  toenails: string;
}

export interface Profile {
  description: string;
  quote: string;
}

export interface MoreDetails {
  aboutHer: string;
  vore: string;
  crushes: string;
  height: string;
  weight: string;
  footSize: string;
  qna: {
    questions: Record<string, string>;
    answers: Record<string, string>;
  };
}

export interface Girl {
  name: string;
  services: string;
  galleryDestination: string;
  prices: PriceDetails;
  profile: Profile;
  more: MoreDetails;
}