import PhoneInput from '@/components/ui/InputComponents/FormInput/PhoneInput';
import InputWithController from '@/components/ui/InputComponents/FormInput/global/CustomInputWithController';
import { Theme, styled } from '@mui/material';

interface StyledProps {
  theme: Theme;
}

const withCustomStyles = <P extends object>(Component: React.ComponentType<P & StyledProps>) =>
  styled(Component)(({ theme }) => ({
    '& .MuiInputBase-root.MuiInput-root': {
      '& input': {
        background: theme.palette.primary.light,
        padding: '10px',
      },
      '&.Mui-error input': {
        color: theme.palette.text.primary,
      },
    },

    '& label': {
      padding: 0,
      color: theme.palette.common.black,
      transform: 'translate(0, -10px) scale(1)',
      zIndex: 1,
      '&.Mui-focused': {
        color: theme.palette.common.black,
      },
    },

    '& .MuiInputBase-root.MuiInput-root:before': {
      borderBottom: '1px solid',
      borderColor: theme.palette.common.black,
    },
    '& .MuiInputBase-root.MuiInput-root:hover:before': {
      borderBottom: '1px solid',
      borderColor: theme.palette.common.black,
    },
    '& .MuiInput-root:after': {
      borderColor: theme.palette.common.black,
    },
    '& .MuiInput-root:hover:after': {
      borderColor: theme.palette.common.black,
      transform: 'scaleX(1)',
    },

    '& .MuiInput-root.Mui-focused:before': {
      borderColor: theme.palette.common.black,
    },
    '& .MuiInput-root.Mui-focused:after': {
      borderColor: theme.palette.common.black,
    },

    '& .MuiInputBase-root.MuiInput-root.Mui-error:before': {
      borderColor: theme.palette.error.main,
    },
    '& .MuiInputBase-root.MuiInput-root.Mui-error:after': {
      borderColor: theme.palette.error.main,
    },

    '& .MuiInputBase-root.MuiInput-root.Mui-error.Mui-focused:before': {
      borderColor: theme.palette.common.black,
    },
    '& .MuiInputBase-root.MuiInput-root.Mui-error.Mui-focused:after': {
      borderColor: theme.palette.common.black,
    },
  }));

export const StyledInputWithController = withCustomStyles(InputWithController);
export const StyledPhoneInput = withCustomStyles(PhoneInput);
