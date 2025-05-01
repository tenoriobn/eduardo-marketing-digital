import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof import('../styles/base/Theme').default.colors;
    gradients: typeof import('../styles/base/Theme').default.gradients;
    borderRadius: typeof import('../styles/base/Theme').default.borderRadius;
    fontSize: typeof import('../styles/base/Theme').default.fontSize;
    fontWeight: typeof import('../styles/base/Theme').default.fontWeight;
    spacing: typeof import('../styles/base/Theme').default.spacing;
    font: { montserrat: string; };
  }
}
