import { ReactNode } from 'react';

export interface CMSContextType {
  cmsContent: Record<string, any>;
}

export interface CMSProviderProps extends CMSContextType {
  children: ReactNode;
}
