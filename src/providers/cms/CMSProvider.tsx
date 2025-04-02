
import { createContext } from 'react';
import { CMSContextType, CMSProviderProps } from './cms.types';

export const CMSContext = createContext<CMSContextType | null>(null);

export default function CMSProvider({ cmsContent, children }: CMSProviderProps) {
  return (
    <CMSContext.Provider value={{ cmsContent }}>
      { children }
    </CMSContext.Provider>
  );
}
