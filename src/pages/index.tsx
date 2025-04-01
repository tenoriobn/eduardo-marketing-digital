import { pageHOC } from 'src/components/commons/wrappers/pageHOC';
import { CMSSectionRender } from 'src/infra/cms/CMSSectionRender';
import { cmsService } from 'src/infra/cms/cmsService';

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
                menuLinks {
                  url
                  label
                  id
                }
                logo {
                  url
                  title
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

function Page() {
  return (
    <CMSSectionRender pageName="homePage" />
  );
}

export default pageHOC(Page);
