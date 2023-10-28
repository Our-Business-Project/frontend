import ParentInput from '../ParentInput';
import { Props } from './props';

export default function DefaultInput(props: Props) {
  return <ParentInput sx={{ color: 'text.primary' }} {...props} />;
}
