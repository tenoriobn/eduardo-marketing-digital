
import { createContext } from 'react';
import { CMSContextType, CMSProviderProps } from './cms.types';

export const CMSContext = createContext<CMSContextType | null>(null);

export default function CMSProvider({ cmsContent, children, year }: CMSProviderProps) {
  return (
    <CMSContext.Provider value={{ cmsContent, year }}>
      { children }
    </CMSContext.Provider>
  );
}
