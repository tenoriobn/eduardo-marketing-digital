import { YearProps } from '../cmsSections/Footer/footer.type';

export interface CMSSectionRenderProps extends YearProps {
  pageName: string;
}

export interface CMSSectionData {
  id: string;
  componentName: string;
}
