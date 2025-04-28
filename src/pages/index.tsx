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
              ... on AboutMeSectionRecord {
                id
                personalOverviewContent {
                  ... on PersonalOverviewRecord {
                    id
                    description
                    title
                  }
                }
                titleSection
                aboutMeImage {
                  url
                }
                linkcta {
                  label
                  url
                  id
                }
              }
              ... on TestimonialsSectionRecord {
                id
                titleSection
              }
              ... on ContactSectionRecord {
                id
                title
                contantContent {
                  ... on SocialFormRecord {
                    id
                    titleSocialForm
                    buttonText
                    inputFormContent {
                      placeholder
                      inputIcon {
                        url
                      }
                      id
                    }
                  }
                  ... on SocialLinkRecord {
                    id
                    description
                    socialLinkContent {
                      socialContent {
                        label
                        url
                      }
                      socialIcon {
                        url
                      }
                      id
                    }
                  }
                }
              }
              ... on FooterSectionRecord {
                id
                copyright
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
