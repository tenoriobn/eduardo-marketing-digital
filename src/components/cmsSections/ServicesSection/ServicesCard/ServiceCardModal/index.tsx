import { useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';
import { boxShadow, CardTitle, linkHover, Text } from 'src/styles';
import { useClickOutside } from 'src/utils/useClickOutside';
import { ServiceCardModalProps } from './serviceCardModal.type';
import ModalHeader from './ModalHeader';
import ModalMain from './ModalMain';
import ModalFooter from './ModalFooter';

const Styled = {
  ModalOverlay: styled(motion.div)<{$isModalOpen: boolean}>`
    background-color: ${({ theme }) => theme.colors['darkGray-76']};
    backdrop-filter: blur(6.7px);

    position: fixed;
    top: 0;
    left: 0;

    display: ${($isModalOpen) => $isModalOpen ? 'grid' : 'none'};
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    z-index: 99999;

    padding: 5rem 1rem;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(194, 20, 20, 0);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    @media (min-width: 768px) {
      padding: 5rem 2rem;
    }
  `,

  BorderGradientContainer: styled(BorderGradientContainer)`
    max-width: max-content;
  `,

  ModalWrapper: styled.div`
    display: grid;
    gap: 1rem;

    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
    ${boxShadow}

    max-width: 742px;
    height: max-content;
    padding: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,

  Separator: styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.gradients.softLight};
  `,
};

export const ModalInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: .5rem;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export default function ServiceCardModal({ isModalOpen, setIsModalOpen, modalContent }: ServiceCardModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, () => setIsModalOpen(false));
  const serviceModal = modalContent.serviceModal;

  return (

    <Styled.ModalOverlay
      $isModalOpen={isModalOpen}
      key={isModalOpen ? 'modalOpen' : 'modalClose'}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Styled.BorderGradientContainer>
        <Styled.ModalWrapper ref={modalRef}>
          <ModalHeader
            setIsModalOpen={setIsModalOpen}
            titleCard={modalContent.titleCard}
          />

          <Styled.Separator></Styled.Separator>

          <ModalMain modalMainContent={serviceModal} />

          <Styled.Separator></Styled.Separator>

          <ModalFooter ctaLink={serviceModal.ctalink} />
        </Styled.ModalWrapper>
      </Styled.BorderGradientContainer>
    </Styled.ModalOverlay>
  );
}
