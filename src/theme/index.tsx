import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';

import dark from './dark';

interface ThemeProps {
  children: ReactNode | ReactNode[];
}

function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
}

export default Object.assign(Theme, { colors: dark.colors });
