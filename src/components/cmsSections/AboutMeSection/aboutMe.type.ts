export interface PersonalOverviewProps {
  personalOverviewContent: {
    id: string;
    title: string;
    description: string;
  }[];
  linkcta: {
    id: string;
    label: string;
    url: string;
  }
}

export interface AboutMeProps extends PersonalOverviewProps {
  titleSection: string;
  aboutMeImage: {
    url: string;
  }
}
