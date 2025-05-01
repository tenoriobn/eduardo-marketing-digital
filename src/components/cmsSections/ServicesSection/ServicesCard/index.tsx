import styled from 'styled-components';
import { ServicesCardProps } from './servicesCard.type';
import { boxShadow, CardTitle, Text } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';

const Styled = {
  ServiceCardWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, auto));
    gap: 1rem;
    grid-auto-rows: 1fr;
    margin: 2rem 0 4rem 0;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin: 3rem 0 5rem 0;
    }
  `,

  ServiceCard: styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    ${boxShadow};

    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
    padding: 1rem;
    height: 100%;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,

  CardTitle: styled(CardTitle)`
    text-transform: uppercase;
    text-align: center;

    @media (min-width: 768px) and (max-width: 1191px) {
      min-height: 51px;
    }

    @media (min-width: 992px) {
      text-align: start;
    }
  `,

  Text: styled(Text)`
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  `,

  Button: styled.button`
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.softGray};
    font-size: .875rem;
    font-weight: 500;
    border-radius: 3rem;
    padding: .875rem;
    width: 100%;
    ${boxShadow};

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  `,
};


export default function ServicesCard({ serviceCardContent }: ServicesCardProps) {
  return (
    <Styled.ServiceCardWrapper>
      {serviceCardContent.map((service) => (
        <BorderGradientContainer key={service.id}>
          <Styled.ServiceCard>
            <Styled.CardTitle>
              {service.titleCard}
            </Styled.CardTitle>

            <Styled.Text>
              {service.description}
            </Styled.Text>

            <BorderGradientContainer>
              <Styled.Button>
                {service.buttonText}
              </Styled.Button>
            </BorderGradientContainer>
          </Styled.ServiceCard>
        </BorderGradientContainer>
      ))}
    </Styled.ServiceCardWrapper>
  );
}
