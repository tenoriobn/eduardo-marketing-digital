export interface HeroSectionProps {
  cotent: Array<{
    titlePart1: {
      value: {
        document: {
          children: Array<{
            children: { value: string }[];
          }>;
        };
      };
    };
    titlePart2: {
      value: {
        document: {
          children: Array<{
            children: { value: string }[];
          }>;
        };
      };
    };
  }>;
}
