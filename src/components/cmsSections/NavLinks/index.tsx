import Link from 'next/link';
import { NavLinksProps } from './navLinks.type';

export default function NavLinks({ links }: NavLinksProps) {
  return (
    <nav>
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
