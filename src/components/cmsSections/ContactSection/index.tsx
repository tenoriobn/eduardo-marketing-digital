import styled from 'styled-components';
import SocialLink from './SocialLink';
import ContactForm from './ContactForm';
import { ContactProps } from './contact.type';
import { TitleSection } from 'src/styles';
import { BorderGradientContainer } from 'src/components/ui/BorderGradient';

const Styled = {
  Section: styled.section`
    display: grid;
  `,

  BorderGradientContainer: styled(BorderGradientContainer)`
    margin: 2rem 0 4rem 0;

    @media (min-width: 768px) {
      margin: 3rem 0 5rem 0;
    }
  `,

  ContactWrapper: styled.div`
    display: grid;
    gap: 1.5rem;
    justify-items: center;

    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
      align-items: center;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr auto 1fr;
    }
  `,

  Separator: styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.gradients.softLight};

    @media (min-width: 992px) {
      height: 100%;
      width: 1px;
    }
  `,
};

export default function ContactSection(props: ContactProps) {
  return (
    <Styled.Section>
      <TitleSection>{props.title}</TitleSection>

      <Styled.BorderGradientContainer>
        <Styled.ContactWrapper>
          <SocialLink socialContent={props.contantContent[0]} />

          <Styled.Separator></Styled.Separator>

          <ContactForm inputsContent={props.contantContent[1]} />
        </Styled.ContactWrapper>
      </Styled.BorderGradientContainer>
    </Styled.Section>
  );
}
