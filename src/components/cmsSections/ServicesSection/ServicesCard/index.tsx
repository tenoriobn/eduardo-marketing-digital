import styled from 'styled-components';
import { BorderGradientContainer } from 'src/styles/BorderGradient';
import { ServicesCardProps } from './servicesCard.type';

const Styled = {
  ServiceCardWrapper: styled.div`
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(288px, auto));
    grid-auto-rows: 1fr;
    margin-bottom: 4rem;

    @media (min-width: 768px) {
      margin-top: 3rem;
      gap: 1.5rem;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 5rem;
    }
  `,

  ServiceCard: styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;

    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
    padding: 1rem;
    height: 100%;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,

  ServiceCardTitle: styled.h3`
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;

    @media (min-width: 768px) and (max-width: 1191px) {
      min-height: 51px;
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }

    @media (min-width: 992px) {
      text-align: start;
    }
  `,

  ServiceCardText: styled.p`
    font-size: .875rem;
    font-weight: 400;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1rem;
    }

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
            <Styled.ServiceCardTitle>
              {service.titleCard}
            </Styled.ServiceCardTitle>

            <Styled.ServiceCardText>
              {service.description}
            </Styled.ServiceCardText>

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
