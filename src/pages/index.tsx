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
              ... on HeroSectionRecord {
                id
                cotent {
                  ... on TitleHeroSectionRecord {
                    id
                    titlePart1 {
                      value
                    }
                    titlePart2 {
                      value
                    }
                  }
                  ... on NewsletterContentRecord {
                    id
                    buttonText
                    cardParagraph
                    contactViaWhatsapp
                    placeholder
                    titleCard
                  }
                  ... on KeyMetricContentRecord {
                    id
                    keyMetricCard {
                      count
                      description
                      id
                    }
                  }
                }
              }
              ... on ServicesSectionRecord {
                id
                titleSection
                serviceCardContent {
                  id
                  titleCard
                  description
                  buttonText
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
