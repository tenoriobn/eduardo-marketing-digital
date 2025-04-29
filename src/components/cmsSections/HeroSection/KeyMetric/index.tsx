import styled from 'styled-components';
import { KeyMetricProps } from './keyMetric.type';
import { BorderGradientContainer } from 'src/styles/BorderGradient';

const StyledKeyMetric = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));

  @media (min-width: 768px) {
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardKeyMetric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 1.5rem;
  padding: 1rem;
  height: 108px;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const Key = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Metric = styled.p`
  font-size: .875rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default function KeyMetric({ keyMetricCard }: KeyMetricProps) {
  return (
    <StyledKeyMetric>
      {keyMetricCard.map((keyMetric) => (
        <BorderGradientContainer key={keyMetric.id}>
          <CardKeyMetric>
            <Key>{keyMetric.count}</Key>
            <Metric>{keyMetric.description}</Metric>
          </CardKeyMetric>
        </BorderGradientContainer>
      ))}
    </StyledKeyMetric>
  );
}
