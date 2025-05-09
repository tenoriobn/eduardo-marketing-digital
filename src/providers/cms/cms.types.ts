import { ReactNode } from 'react';

export interface CMSContextType {
  cmsContent: Record<string, any>;
  year: number
}

export interface CMSProviderProps extends CMSContextType {
  children: ReactNode;
}
