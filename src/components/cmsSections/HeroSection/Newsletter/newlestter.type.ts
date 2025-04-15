export interface NewlestterContent {
  id: string;
  buttonText: string;
  cardParagraph: string;
  contactViaWhatsapp: string;
  placeholder: string;
  titleCard: string;
}

export interface NewlestterProps {
  content: NewlestterContent;
}
