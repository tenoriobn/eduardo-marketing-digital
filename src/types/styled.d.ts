import 'styled-components';
import { ThemeType } from '../styles/base/Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
