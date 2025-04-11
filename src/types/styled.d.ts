import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof import('../styles/Theme').default.colors;
    gradients: typeof import('../styles/Theme').default.gradients;
    borderRadius: typeof import('../styles/Theme').default.borderRadius;
    fontSize: typeof import('../styles/Theme').default.fontSize;
    fontWeight: typeof import('../styles/Theme').default.fontWeight;
    spacing: typeof import('../styles/Theme').default.spacing;
    font: { montserrat: string; };
  }
}
