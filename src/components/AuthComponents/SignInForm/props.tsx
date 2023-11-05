import { SignInUserProps } from '@/core/services/auth.service';
import { BoxProps } from '@mui/material';

export type Props = {
  login: (payload: SignInUserProps) => void;
} & BoxProps;
