import { CMSSectionRender } from 'src/components/CMSSectionRender';
import CMSProvider from 'src/providers/cms/CMSProvider';
import { cmsService } from 'src/service/cmsService';
import { CMSContent } from '../types/cmsContent.types';

export async function getStaticProps() {
  const { data: cmsContent } = await cmsService({
    query: `
      query MyQuery {
        homePage {
          pageContent {
            section {
              componentName:  __typename
              ... on HeaderSectionRecord {
                id
                logo {
                  url
                }
                menuLinks {
                  url
                  label
                  id
                }
                ctaButton {
                  id
                  label
                  url
                }
              }
            }
          }
        }
      }
    `
  });

  return {
    props: { cmsContent },
  };
}

export default function HomePage({ cmsContent }: CMSContent) {

  return (
    <CMSProvider cmsContent={cmsContent}>
      <CMSSectionRender pageName="homePage" />
    </CMSProvider>
  );
}
