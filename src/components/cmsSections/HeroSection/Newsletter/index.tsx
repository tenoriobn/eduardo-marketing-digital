import React from 'react';
import { NewlestterProps } from './newlestter.type';
import styled from 'styled-components';
import NewsletterCard from './NewsletterCard';
import WhatsappButton from './WhatsappButton';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';

const Styled = {
  NewsletterBackground: styled.div`
    background: url('/images/featured-card-bg.jpg') no-repeat bottom / 100%;
    background-position: 50% 77%;
    border-radius: 1.5rem;

    display: flex;
    align-items: end;
    gap: 1rem;

    height: 398px;
    padding: 1rem;

    @media (min-width: 768px) {
      background-position: 50% 77%;
      padding: 1.5rem;
    }

    @media (min-width: 992px) {
      background-position: 50% 65%;
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
    <BorderGradientContainer>
      <Styled.NewsletterBackground>
        <Styled.NewsletterContentWrapper>
          <WhatsappButton contactViaWhatsapp={content.contactViaWhatsapp} />
          <NewsletterCard contentNewsletter={content} />
        </Styled.NewsletterContentWrapper>
      </Styled.NewsletterBackground>
    </BorderGradientContainer>
  );
}
