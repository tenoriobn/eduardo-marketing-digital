import { cmsSections } from 'components/cmsSections';
import { useGetCMSContent } from 'src/providers/cms/useGetCMSContent';
import { CMSSectionData, CMSSectionRenderProps } from './cmsSectionRender.types';

export function CMSSectionRender({ pageName, year }: CMSSectionRenderProps) {
  const sections: CMSSectionData[] = useGetCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map(({ componentName, id, ...sectionProps }) => {
    const Component = cmsSections[componentName];
    if(!Component) return null;

    return <Component key={id} year={year} {...sectionProps} />;
  });
}
