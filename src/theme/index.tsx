import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';

import light from './light';

interface ThemeProps {
  children: ReactNode | ReactNode[];
}

function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
}

export default Theme;
