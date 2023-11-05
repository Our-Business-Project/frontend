import { Props as CustomTextField } from '../global/CustomTextField/props';

export type Props = {
  label1: string;
  callback: () => void | undefined;
} & CustomTextField;
