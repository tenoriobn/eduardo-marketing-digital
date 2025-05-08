import { ModalMainContent } from './ModalMain/modalMain.type';

export interface ServiceCardModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: ModalContent;
}

export interface ModalContent {
  titleCard: string;
  serviceModal: ModalMainContent;
}
