export interface FAQ {
  question: string;
  answer: string;
}

export interface Founder {
  id: string;
  imageSrc: ImageMetadata;
}

export interface Integration {
  id: string;
  iconSrc: ImageMetadata;
}

export interface AlliedOrganization {
  id: string;
  logoSrc: ImageMetadata;
}

export interface PlatformStepImage {
  id: string;
  imageSrc: any; // Using any since it's typeof centralizeDataImage
}

