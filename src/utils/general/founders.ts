import joseMurilloImage from "@/assets/founders/jose-murillo.jpg";
import santiagoBuenahoraImage from "@/assets/founders/santiago-buenahora.jpg";
import andresRosalesImage from "@/assets/founders/andres-rosales.jpg";

export interface Founder {
  id: string;
  imageSrc: ImageMetadata;
}

export const founders: Founder[] = [
  { id: "jose-murillo", imageSrc: joseMurilloImage },
  { id: "santiago-buenahora", imageSrc: santiagoBuenahoraImage },
  { id: "andres-rosales", imageSrc: andresRosalesImage },
];

