export interface ServicesCardProps {
  serviceCardContent: ServiceCardItem[];
}

interface ServiceCardItem {
  id: string;
  titleCard: string;
  description: string;
  buttonText: string;
}
