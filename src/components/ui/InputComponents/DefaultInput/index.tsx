import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import ParentInput from '../ParentInput';
import { Props } from './props';

export default function DefaultInput(props: Props) {
  const theme = useTheme();
  return <DInput theme={theme} {...props} />;
}

const DInput = styled(ParentInput)(
  ({ theme }) => `
  & {
    width: 100%;
  }
  label,
  input,
  textarea {
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 10px;
    height: auto;
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, padding 200ms cubic-bezier(0, 0, 0.2, 1);
  }
  label {
    &.Mui-focused {
      padding-left: 0;
    }
  }
  .MuiInput-root {
    &:before {
      border-bottom: 1px solid rgba(0,0,0,.25);
    }

    &.Mui-error {
      &:before {
        border-bottom: 1px solid ${theme.palette.error.main};
      }
    }
  }
`
);
