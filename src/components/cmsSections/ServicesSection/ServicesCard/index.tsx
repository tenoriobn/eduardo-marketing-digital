import styled from 'styled-components';
import { ServicesCardProps } from '../services.type';

const StyledServiceCardContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(342px, auto));
  grid-auto-rows: 1fr;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-top: 3rem;
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 5rem;
  }
`;

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 1.5rem;
  padding: .0625rem;
  height: 100%;
`;

const StyledCardService = styled.div`
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
`;

const StyledServiceTitle = styled.h3`
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
`;

const StyledServiceDescription = styled.p`
  font-size: .875rem;
  font-weight: 400;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    text-align: start;
  }
`;

const StyledButtonContainer = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 3rem;
  padding: .0625rem;
  width: 100%;
`;

const StyledButton = styled.button`
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
`;

export default function ServicesCard({ serviceCardContent }: ServicesCardProps) {
  return (
    <StyledServiceCardContainer>
      {serviceCardContent.map((service) => (
        <StyledContainer key={service.id}>
          <StyledCardService>
            <StyledServiceTitle>{service.titleCard}</StyledServiceTitle>
            <StyledServiceDescription>{service.description}</StyledServiceDescription>
            <StyledButtonContainer>
              <StyledButton>{service.buttonText}</StyledButton>
            </StyledButtonContainer>
          </StyledCardService>
        </StyledContainer>
      ))}
    </StyledServiceCardContainer>
  );
}
