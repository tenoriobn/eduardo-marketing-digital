import styled from 'styled-components';
import SocialLink from './SocialLink';
import ContactForm from './ContactForm';
import { ContactProps } from './contact.type';

const StyledContactSection = styled.section`
  display: grid;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const StyledTitleSection = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  justify-self: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.gradients.softLight};
  border-radius: 1.5rem;
  padding: .0625rem;
  height: 100%;
`;


const StyledContactContent = styled.div`
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
`;

const StyledDivider = styled.span`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.gradients.softLight};

  @media (min-width: 992px) {
    height: 100%;
    width: 1px;
  }
`;

export default function ContactSection(props: ContactProps) {
  return (
    <StyledContactSection>
      <StyledTitleSection>{props.title}</StyledTitleSection>

      <StyledContainer>
        <StyledContactContent>
          <SocialLink socialContent={props.contantContent[0]} />

          <StyledDivider></StyledDivider>

          <ContactForm inputsContent={props.contantContent[1]} />
        </StyledContactContent>
      </StyledContainer>
    </StyledContactSection>
  );
}
