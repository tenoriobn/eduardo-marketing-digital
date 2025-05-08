import styled from 'styled-components';
import { ModalInfoWrapper } from '..';
import { CardTitle, Text } from 'src/styles';
import CheckIcon from 'public/icons/check.svg';
import CoolFaceIcon from 'public/icons/cool-face.svg';
import { ModalMainProps } from './modalMain.type';

const Styled = {
  Main: styled.main`
    display: grid;
    gap: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  ServicoInfoWrapper: styled.div`
    display: grid;
    gap: .5rem;
  `,

  ServiceInfoContent: styled.div`
    display: grid;
    gap: .125rem;
  `,

  TextSemiBold: styled.span`
    font-weight: 600;
  `,
};

export default function ModalMain({ modalMainContent }: ModalMainProps) {
  return (
    <Styled.Main>
      <Styled.ServicoInfoWrapper>
        <ModalInfoWrapper>
          <CoolFaceIcon />
          <CardTitle>{modalMainContent.impactPhraseModal}</CardTitle>
        </ModalInfoWrapper>

        <Text>{modalMainContent.impactPhraseDescriptionModal}</Text>
      </Styled.ServicoInfoWrapper>

      <Styled.ServicoInfoWrapper>
        <CardTitle>{modalMainContent.serviceActivityTitle}</CardTitle>

        <Styled.ServiceInfoContent>
          {modalMainContent.activitiesContent.map((activities) => (
            <ModalInfoWrapper key={activities.id}>
              <CheckIcon />
              <Text>
                <Styled.TextSemiBold>{activities.serviceActivity} &nbsp;</Styled.TextSemiBold>
                {activities.serviceActivityDescription}
              </Text>
            </ModalInfoWrapper>
          ))}
        </Styled.ServiceInfoContent>
      </Styled.ServicoInfoWrapper>

      <Styled.ServicoInfoWrapper>
        <CardTitle>{modalMainContent.expectedImpactTitle}</CardTitle>

        <Styled.ServiceInfoContent>
          {modalMainContent.expectedImpacts.map((expectedImpact) => (
            <ModalInfoWrapper key={expectedImpact.id}>
              <CheckIcon />
              <Text>{expectedImpact.expectedImpactDescription}</Text>
            </ModalInfoWrapper>
          ))}
        </Styled.ServiceInfoContent>
      </Styled.ServicoInfoWrapper>
    </Styled.Main>
  );
}
