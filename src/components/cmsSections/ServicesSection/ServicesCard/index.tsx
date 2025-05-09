import styled from 'styled-components';
import { ServicesCardProps } from './servicesCard.type';
import { boxShadow, buttonActive, buttonHover, CardTitle, Text } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';
import { useState } from 'react';
import ServiceCardModal from './ServiceCardModal';
import { AnimatePresence  } from 'framer-motion';
import useBodyOverflow from 'src/utils/useBodyOverflow';
import { ModalContent } from './ServiceCardModal/serviceCardModal.type';

const Styled = {
  ServiceCardWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, auto));
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

    @media (min-width: 624px) and (max-width: 1090px) {
      min-height: 46px;
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
    color: ${({ theme }) => theme.colors.silverGray};
    font-size: .875rem;
    font-weight: 500;
    border-radius: 3rem;
    padding: .875rem;
    width: 100%;
    transition: ${({ theme }) => theme.transitions.softInteraction};

    ${boxShadow};
    ${buttonHover};
    ${buttonActive}

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  `,
};


export default function ServicesCard({ serviceCardContent }: ServicesCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  useBodyOverflow(isModalOpen);

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
              <Styled.Button
                onClick={() => {
                  setIsModalOpen(true);
                  setModalContent({
                    titleCard: service.titleCard,
                    serviceModal: service.serviceModal,
                  });
                }}
              >
                <span>{service.buttonText}</span>
              </Styled.Button>
            </BorderGradientContainer>
          </Styled.ServiceCard>
        </BorderGradientContainer>
      ))}

      <AnimatePresence mode="wait" initial={false}>
        {isModalOpen &&
          <ServiceCardModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            modalContent={modalContent as ModalContent}
          />
        }
      </AnimatePresence>
    </Styled.ServiceCardWrapper>
  );
}
