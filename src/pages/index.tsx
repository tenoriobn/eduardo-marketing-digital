import { CMSSectionRender } from 'src/components/CMSSectionRender';
import CMSProvider from 'src/providers/cms/CMSProvider';
import { cmsService } from 'src/service/cmsService';
import { CMSContent } from '../types/cmsContent.types';

export async function getStaticProps() {
  const year = new Date().getFullYear();

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
                  serviceModal {
                    id
                    impactPhraseDescriptionModal
                    impactPhraseModal
                    serviceActivityTitle
                    expectedImpactTitle
                    expectedImpacts {
                      id
                      expectedImpactDescription
                    }
                    icon {
                      url
                    }
                    activitiesContent {
                      serviceActivity
                      id
                      serviceActivityDescription
                    }
                    ctalink {
                      url
                      label
                    }
                  }
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
                testimonialsContent {
                  userName
                  testimonial
                  id
                  fullName
                  userImage {
                    url
                  }
                }
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
    props: {
      cmsContent ,
      year
    },
  };
}

export default function HomePage({ cmsContent, year }: CMSContent) {
  return (
    <CMSProvider cmsContent={cmsContent} year={year}>
      <CMSSectionRender pageName="homePage" year={year} />
    </CMSProvider>
  );
}
