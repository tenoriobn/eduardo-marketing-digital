import { LinkProps } from 'next/link';

export interface CTAButtonProps extends LinkProps {
  children: React.ReactNode;
  target?: string;
  className?: string;
}
