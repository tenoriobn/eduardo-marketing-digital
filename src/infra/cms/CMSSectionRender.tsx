import { cmsSections } from 'src/components/cmsSections';
import { GetCMSContent } from './CMSProvider';

interface SectionProps {
  id: string;
  componentName: string;
  visible?: boolean;
}

export function CMSSectionRender({ pageName }: {pageName: string}) {
  const sections: SectionProps[] = GetCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps) => {
    console.log('sectionProps.componentName: ', sectionProps.componentName);

    const Component = cmsSections[sectionProps.componentName];
    const isVisible = sectionProps.visible === true || sectionProps.visible === undefined;

    if(!Component) return null;
    if(!isVisible) return null;

    return (
      <Component key={sectionProps.id} {...sectionProps} />
    );
  });
}
