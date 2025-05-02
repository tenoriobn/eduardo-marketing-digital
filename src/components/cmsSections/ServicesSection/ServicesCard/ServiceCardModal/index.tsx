import CloseIcon from 'public/icons/close.svg';
import WhatsappButton from '../../../HeroSection/Newsletter/WhatsappButton';
import styled, { css } from 'styled-components';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';
import { boxShadow, CardTitle, Text } from 'src/styles';
import Link from 'next/link';
import { useRef } from 'react';
import { useClickOutside } from 'src/utils/useClickOutside';
import { motion } from 'framer-motion';

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

  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  ModalTitle: styled(CardTitle)`
    text-transform: uppercase;
  `,

  ModalIconClose: styled.button`
    height: 16px;
  `,

  Separator: styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.gradients.softLight};
  `,

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

  Footer: styled.footer`
    display: flex;
    align-items: center;
    gap: .75rem;
  `,

  CTALink: styled(Link)`
    font-size: 1rem;
    font-weight: 600;
    text-decoration: underline;
    order: 3;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  `,
};

export default function ServiceCardModal({ isModalOpen, setIsModalOpen }: ServiceCardModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, () => setIsModalOpen(false));

  return (

    <Styled.ModalOverlay
      $isModalOpen={isModalOpen}
      key={isModalOpen ? 'modalOpen' : 'modalClose'}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: .075 }}
    >
      <Styled.BorderGradientContainer>
        <Styled.ModalWrapper ref={modalRef}>
          <Styled.Header>
            <Styled.ModalTitle as="h2">🚀 Estratégias de SEO</Styled.ModalTitle>

            <Styled.ModalIconClose onClick={() => setIsModalOpen(false)}>
              <CloseIcon />
            </Styled.ModalIconClose>
          </Styled.Header>

          <Styled.Separator></Styled.Separator>

          <Styled.Main>
            <Styled.ServicoInfoWrapper>
              <CardTitle>😎 Domine o topo do Google com SEO estratégico!</CardTitle>
              <Text>
                  O SEO é a chave para atrair tráfego orgânico de qualidade e gerar crescimento sustentável para sua marca. Aplicamos estratégias personalizadas para melhorar seu ranqueamento no Google, tornando seu site mais visível e relevante para o seu público.
              </Text>
            </Styled.ServicoInfoWrapper>

            <Styled.ServicoInfoWrapper>
              <CardTitle>O que fazemos?</CardTitle>

              <Styled.ServiceInfoContent>
                <Text>✔ SEO Técnico: Melhoramos a velocidade, estrutura e acessibilidade do seu site.</Text>
                <Text>✔ SEO Técnico: Melhoramos a velocidade, estrutura e acessibilidade do seu site.</Text>
                <Text>✔ SEO Técnico: Melhoramos a velocidade, estrutura e acessibilidade do seu site.</Text>
                <Text>✔ SEO Técnico: Melhoramos a velocidade, estrutura e acessibilidade do seu site.</Text>
              </Styled.ServiceInfoContent>
            </Styled.ServicoInfoWrapper>

            <Styled.ServicoInfoWrapper>
              <CardTitle>Resultados que você pode esperar:</CardTitle>

              <Styled.ServiceInfoContent>
                <Text>✔ Mais tráfego qualificado</Text>
                <Text>✔ Mais tráfego qualificado</Text>
                <Text>✔ Mais tráfego qualificado</Text>
                <Text>✔ Mais tráfego qualificado</Text>
              </Styled.ServiceInfoContent>
            </Styled.ServicoInfoWrapper>
          </Styled.Main>

          <Styled.Separator></Styled.Separator>

          <Styled.Footer>
            <WhatsappButton
              contactViaWhatsapp='whatsapp'
            />

            <Styled.CTALink
              href="whatsapp"
              target='_blank'
              rel='noopener noreferrer'
            >
                Fale com Eduardo e potencialize seu marketing!
            </Styled.CTALink>
          </Styled.Footer>
        </Styled.ModalWrapper>
      </Styled.BorderGradientContainer>
    </Styled.ModalOverlay>
  );
}
