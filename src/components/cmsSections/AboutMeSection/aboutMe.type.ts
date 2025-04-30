import { PersonalOverviewProps } from './PersonalOverview/personalOverview.type';

export interface AboutMeProps extends PersonalOverviewProps {
  titleSection: string;
  aboutMeImage: {
    url: string;
  }
}
