import { CardTitle } from 'src/styles';
import { ModalInfoWrapper } from '..';
import CloseIcon from 'public/icons/close.svg';
import styled from 'styled-components';
import { ModalHeaderProps } from './modalHeader.type';

const Styled = {
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

    svg {
      path {
        transition: ${({ theme }) => theme.transitions.softInteraction};
        stroke: ${({ theme }) => theme.colors.silverGray};
      }

      &:hover {
        path {
          stroke: ${({ theme }) => theme.colors.softGray};
        }
      }
    }
  `,
};

export default function ModalHeader({titleCard, setIsModalOpen}: ModalHeaderProps) {
  return (
    <Styled.Header>
      <ModalInfoWrapper>
        <Styled.ModalTitle as="h2">{titleCard}</Styled.ModalTitle>
      </ModalInfoWrapper>

      <Styled.ModalIconClose onClick={() => setIsModalOpen(false)}>
        <CloseIcon />
      </Styled.ModalIconClose>
    </Styled.Header>
  );
}
