/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import get from 'lodash/get';

const CMSContext = React.createContext({
  cmsContent: {}
});

export const GetCMSContent = (path = '') => {
  const cmsContent = React.useContext(CMSContext).cmsContent;
  if(path === '') return cmsContent;
  const output = get(cmsContent, path);

  if (!output) throw new Error(`NÃO FOI POSSÍVEL ENCONTRAR A CHAVE: "${path}". Reveja sua query e tente novamente!`);
  return output;
};

interface CMSProviderProps {
  cmsContent: Record<string, any>;
  children: ReactNode;
}

export default function CMSProvider({ cmsContent, children }: CMSProviderProps) {
  return (
    <CMSContext.Provider value={{ cmsContent }}>
      { children }
    </CMSContext.Provider>
  );
}
