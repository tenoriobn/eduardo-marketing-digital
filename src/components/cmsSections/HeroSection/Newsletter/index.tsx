import { NewlestterProps } from './newlestter.type';
import styled from 'styled-components';
import NewsletterCard from './NewsletterCard';
import WhatsappButton from 'components/WhatsappButton';
import { BorderGradientContainer } from 'src/styles/ui/BorderGradient';
import { boxShadow } from 'src/styles';

const Styled = {
  NewsletterBackground: styled.div`
    background: url('/images/featured-card-bg.jpg') no-repeat bottom / 100%;
    background-position: 50% 77%;
    border-radius: 1.5rem;
    ${boxShadow}

    display: flex;
    align-items: end;
    gap: 1rem;

    height: 398px;
    padding: 1rem;

    &::before {
      content: '';
      position: absolute;
      top: 3%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background-color: ${({ theme }) => theme.colors.ironGray};
      border-radius: 100%;
      filter: blur(120px);
      z-index: -1;
    }

    @media (min-width: 768px) {
      background-position: 50% 77%;
      padding: 1.5rem;

      &::before {
        top: 7%;
        width: 220px;
        height: 220px;
        filter: blur(180px);
      }
    }

    @media (min-width: 992px) {
      background-position: 50% 65%;

      &::before {
        width: 240px;
        height: 240px;
        filter: blur(200px);
      }
    }
  `,

  NewsletterContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
    }
  `,
};

export default function Newsletter({ content }: NewlestterProps) {
  return (
    <BorderGradientContainer height='max-content'>
      <Styled.NewsletterBackground>
        <Styled.NewsletterContentWrapper>
          <WhatsappButton contactViaWhatsapp={content.contactViaWhatsapp} />
          <NewsletterCard contentNewsletter={content} />
        </Styled.NewsletterContentWrapper>
      </Styled.NewsletterBackground>
    </BorderGradientContainer>
  );
}
