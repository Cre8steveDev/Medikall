import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (message: string) => {
  return toast.success(message, { position: 'bottom-right' });
};

export const notifyError = (message: string) => {
  return toast.error(message, { position: 'bottom-right' });
};

export const notifyInfo = (message: string) => {
  return toast.info(message, { position: 'top-right' });
};
