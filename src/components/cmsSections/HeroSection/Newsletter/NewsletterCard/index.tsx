import styled from 'styled-components';
import EmailIcon from 'public/icons/email.svg';
import { NewlestterCardProps } from './newsletterCard.type';
import { buttonActive, buttonHover, CardTitle, innerShadow, focusField, Text, focusFieldBorder } from 'src/styles';

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
    transition: ${({ theme }) => theme.transitions.softInteraction};
    ${innerShadow}
    ${focusFieldBorder}

    @media (min-width: 992px) {
      max-width: 380px;
    }
  `,

  Label: styled.label`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: .375rem;
    width: 100%;
    transition: ${({ theme }) => theme.transitions.softInteraction};
    ${focusField}

    svg {
      path {
        transition: ${({ theme }) => theme.transitions.softInteraction};
        stroke: ${({ theme }) => theme.colors.grayStone};
      }
    }
  `,

  Input: styled.input`
    border: none;
    outline: none;
    background-color: transparent;
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
    background-color: ${({ theme }) => theme.colors['silverGray-4']};
    color: ${({ theme }) => theme.colors.silverGray};
    font-size: .875rem;
    border-radius: 3rem;
    border: .0625rem solid ${({ theme }) => theme.colors.charcoalGray};
    padding: 0 .75rem;
    height: 38px;
    min-width: 78px;
    transition: ${({ theme }) => theme.transitions.softInteraction};

    ${buttonHover};
    ${buttonActive}

    span {
      z-index: 20;
    }

    @media (min-width: 768px) {
      font-size: 1rem;
      min-width: 84px;
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

        <Styled.Button>
          <span>{contentNewsletter.buttonText}</span>
        </Styled.Button>
      </Styled.Form>
    </Styled.NewsletterCard>
  );
}
