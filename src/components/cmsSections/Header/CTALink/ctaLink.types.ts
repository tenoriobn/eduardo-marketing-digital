import { LinkProps } from 'next/link';

export interface CTALinkProps extends LinkProps {
  children: React.ReactNode;
  target?: string;
  className?: string;
}
