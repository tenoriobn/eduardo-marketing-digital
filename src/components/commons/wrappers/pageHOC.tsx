/* eslint-disable @typescript-eslint/no-explicit-any */
import CMSProvider from 'src/infra/cms/CMSProvider';

export function pageHOC(Component: any) {
  return function Wrapper(props: any) {
    return (
    <CMSProvider cmsContent={props.cmsContent}>
      <Component {...props} />
    </CMSProvider>
    );
  };
}
