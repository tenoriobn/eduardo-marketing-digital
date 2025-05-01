import styled from 'styled-components';
import { KeyMetricProps } from './keyMetric.type';
import { Text } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';

const Styled = {
  KeyMetricWrapper: styled.div`
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
  `,

  KeyMetricCard: styled.div`
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
  `,

  Key: styled.h3`
    font-size: 1.5rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  `,
};



export default function KeyMetric({ keyMetricCard }: KeyMetricProps) {
  return (
    <Styled.KeyMetricWrapper>
      {keyMetricCard.map((keyMetric) => (
        <BorderGradientContainer key={keyMetric.id}>
          <Styled.KeyMetricCard>
            <Styled.Key>{keyMetric.count}</Styled.Key>
            <Text>{keyMetric.description}</Text>
          </Styled.KeyMetricCard>
        </BorderGradientContainer>
      ))}
    </Styled.KeyMetricWrapper>
  );
}
