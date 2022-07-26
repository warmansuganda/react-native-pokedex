import React, { ReactNode } from 'react';

export interface TabItemProps {
  id: string;
  title: string;
  children: ReactNode | ReactNode[];
}

function TabItem({ children }: TabItemProps) {
  return <>{children}</>;
}

export default TabItem;
