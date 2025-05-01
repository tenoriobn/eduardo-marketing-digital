import styled from 'styled-components';
import EmailIcon from 'public/icons/email.svg';
import { NewlestterCardProps } from './newsletterCard.type';
import { CardTitle, innerShadow, Text } from 'src/styles';

const Styled = {
  NewsletterCard: styled.div`
    background-color: ${({ theme }) => theme.colors['darkGray-50']};
    backdrop-filter: blur(.5rem);
    border: .0625rem solid ${({ theme }) => theme.colors.charcoalGray};
    border-radius: 1.5rem;
    display: grid;
    gap: .75rem;
    width: 100%;
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,

  CardTitle: styled.h3`
    font-size: 1.125rem;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  `,

  Form: styled.form`
    border: .0625rem solid ${({ theme }) => theme.colors.charcoalGray};
    border-radius: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .5rem .5rem .5rem 1rem;
    ${innerShadow}

    @media (min-width: 992px) {
      max-width: 380px;
    }
  `,

  Label: styled.label`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .375rem;
    width: 100%;

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.grayStone};
      }
    }
  `,

  Input: styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.softGray};
    font-size: .875rem;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  `,

  Button: styled.button`
    background-color: ${({ theme }) => theme.colors['lightSilver-04']};
    color: ${({ theme }) => theme.colors.softGray};
    font-size: .875rem;
    border-radius: 3rem;
    border: .0625rem solid ${({ theme }) => theme.colors.charcoalGray};
    padding: 0 .75rem;
    height: 38px;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  `,
};


export default function NewsletterCard({ contentNewsletter }: NewlestterCardProps) {
  return (
    <Styled.NewsletterCard>
      <CardTitle>{contentNewsletter.titleCard}</CardTitle>
      <Text>{contentNewsletter.cardParagraph}</Text>

      <Styled.Form action="">
        <Styled.Label htmlFor="input-email">
          <EmailIcon />

          <Styled.Input
            id='input-email'
            type="email"
            placeholder={contentNewsletter.placeholder}
            required
          />
        </Styled.Label>

        <Styled.Button>{contentNewsletter.buttonText}</Styled.Button>
      </Styled.Form>
    </Styled.NewsletterCard>
  );
}
