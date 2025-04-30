export interface PersonalOverviewProps {
  personalOverviewContent: personalOverviewContent[];
  linkcta: LinkCTA;
}

interface personalOverviewContent {
  id: string;
  title: string;
  description: string;
}

interface LinkCTA {
  id: string;
  label: string;
  url: string;
}
