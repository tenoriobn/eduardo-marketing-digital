import UserIcon from 'public/icons/user.svg';
import EmailIcon from 'public/icons/email.svg';
import MessageIcon from 'public/icons/message.svg';

export const formFieldsSchema = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Nome',
    icon: <UserIcon />,
    as: 'input',
    borderRadius: '3rem',
    minLength: 3,
    maxLength: 100,
    autoComplete: 'name',
    pattern: '^[A-Za-zÀ-ÖØ-öø-ÿ\\s]+$',
    title: 'O nome deve conter apenas letras e espaços.',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'E-mail',
    icon: <EmailIcon />,
    as: 'input',
    borderRadius: '3rem',
    minLength: 4,
    maxLength: 40,
    autoComplete: 'email',
    title: 'O email deve ter o formato email@email.dominio',
  },
  {
    id: 'message',
    placeholder: 'Mensagem',
    icon: <MessageIcon />,
    as: 'textarea',
    borderRadius: '1.5rem',
    minLength: 10,
    maxLength: 1000,
  },
];
