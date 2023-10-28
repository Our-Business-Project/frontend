import { toast } from 'react-toastify';

export const successNotify = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: 'notification',
  });
};

export const errorNotify = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: 'notification',
  });
};
