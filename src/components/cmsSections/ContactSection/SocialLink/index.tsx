import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { SocialLinkProps } from './socialLink.type';

const StyledSocialLink = styled.div`
  display: grid;
  gap: 1rem;
`;

const StyledContactDescription = styled.p`
  font-size: .875rem;
  font-weight: 500;
  text-align: center;
  max-width: 512px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledSocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export default function SocialLink({ socialContent }: SocialLinkProps) {
  return (
    <StyledSocialLink>
      <StyledContactDescription>{socialContent.description}</StyledContactDescription>

      <StyledSocialLinksContainer>
        {socialContent.socialLinkContent.map((socialLink) => (
          <Link href={socialLink.socialContent.url} key={socialLink.id} target='_blank'>
            <Image src={socialLink.socialIcon.url} alt={socialLink.socialContent.label} width={36} height={36} />
          </Link>
        ))}
      </StyledSocialLinksContainer>
    </StyledSocialLink>
  );
}
