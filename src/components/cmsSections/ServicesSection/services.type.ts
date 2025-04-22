export interface ServicesCardProps {
  serviceCardContent: {
    id: string;
    titleCard: string;
    description: string;
    buttonText: string;
  }[];
}

export interface ServicesProps extends ServicesCardProps {
  titleSection: string;
}
