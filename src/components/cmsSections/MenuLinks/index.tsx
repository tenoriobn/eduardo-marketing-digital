import Link from 'next/link';
import { MenuLinkProps, MenuLink } from './menuLink.type';

export default function MenuLinks(props: MenuLinkProps) {
  const menuLinks: MenuLink[] = props.menuLinks;

  return (
    <>
      {menuLinks.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.label}
        </Link>
      ))}

      <h1>Hello, Next.js! 2025</h1>
    </>
  );
}
