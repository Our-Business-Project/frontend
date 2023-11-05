import { SignUpUserProps } from '@/core/services/auth.service';
import { BoxProps } from '@mui/material';

export type Props = {
  register: (payload: SignUpUserProps) => void;
} & BoxProps;
