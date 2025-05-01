import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { SocialLinkProps } from './socialLink.type';
import { Text } from 'src/styles';

const Styled = {
  SocialLinkWrapper: styled.div`
    display: grid;
    gap: 1rem;
  `,

  Text: styled(Text)`
    text-align: center;
    max-width: 512px;
  `,

  SocialLinkContent: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,
};

export default function SocialLink({ socialContent }: SocialLinkProps) {
  return (
    <Styled.SocialLinkWrapper>
      <Styled.Text>{socialContent.description}</Styled.Text>

      <Styled.SocialLinkContent>
        {socialContent.socialLinkContent.map((socialLink) => (
          <Link href={socialLink.socialContent.url} key={socialLink.id} target='_blank'>
            <Image src={socialLink.socialIcon.url} alt={socialLink.socialContent.label} width={36} height={36} />
          </Link>
        ))}
      </Styled.SocialLinkContent>
    </Styled.SocialLinkWrapper>
  );
}
