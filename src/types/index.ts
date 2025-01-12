export interface ServiceCardProps {
  imageSrc: string;
  title: string;
  alt: string;
}

export interface InsightCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition: "left" | "right";
  alt: string;
}
