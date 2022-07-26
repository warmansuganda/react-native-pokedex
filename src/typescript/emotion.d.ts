import '@emotion/react';

import theme from '@theme/dark';

export type ThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
