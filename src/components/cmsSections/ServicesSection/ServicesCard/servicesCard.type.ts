import { ModalMainContent } from './ServiceCardModal/ModalMain/modalMain.type';
import { ModalContent } from './ServiceCardModal/serviceCardModal.type';

export interface ServicesCardProps {
  serviceCardContent: ServiceCardItem[];
}

export interface ServiceCardItem {
  id: string;
  titleCard: string;
  description: string;
  buttonText: string;
  serviceModal: ModalMainContent;
  modalContent: ModalContent
}
