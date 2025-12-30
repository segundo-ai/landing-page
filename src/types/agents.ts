export interface Agent {
  id: string;
  iconSrc: ImageMetadata;
}

export interface TranslatedAgent extends Agent {
  name: string;
  description: string;
}

