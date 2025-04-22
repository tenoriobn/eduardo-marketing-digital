import { KeyMetricContent } from './KeyMetric/keyMetric.type';
import { NewlestterContent } from './Newsletter/newlestter.type';

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
