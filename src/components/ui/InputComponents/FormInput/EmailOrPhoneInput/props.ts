import { Props as CustomInputWithMaskProps } from '../global/CustomInputWithMask/props';

export type Props = {
  label1: string;
  callback: () => void | undefined;
} & CustomInputWithMaskProps;
