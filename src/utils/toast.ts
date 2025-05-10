import { toast, ToastOptions } from 'react-toastify';

const defaultOptions: ToastOptions = {
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
};

export function showSuccess(message: string, options?: ToastOptions) {
  toast.success(message, { ...defaultOptions, ...options });
}

export function showError(message: string, options?: ToastOptions) {
  toast.error(message, { ...defaultOptions, ...options });
}
