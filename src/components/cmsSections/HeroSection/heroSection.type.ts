import { KeyMetricContent } from './KeyMetric/keyMetric.type';
import { NewlestterContent } from './Newsletter/NewsletterCard/newsletterCard.type';

export interface HeroSectionProps {
  cotent: [
    {
      titlePart1: {
        value: {
          document: {
            children: {
              children: { value: string }[];
            }[];
          };
        };
      };
      titlePart2: {
        value: {
          document: {
            children: {
              children: { value: string }[];
            }[];
          };
        };
      };
    },
    NewlestterContent,
    KeyMetricContent
  ];
}
