import { useState } from 'react';
import { Box, Grid, styled, Button, ButtonProps } from '@mui/material';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { profileUpdateSchema } from '@/core/validation/profileUpdate.validation';
import { formatPhone, phoneToNumbers } from '@/core/validation/helpers/format.helpers';

import ProfileRadioGroup from './ProfileRadioGroup';
import ProfileInfoTextFields from './ProfileInfoTextFields';
import { useProfile } from '@/core/hooks/useProfile';
import { useAuth } from '@/core/hooks/useAuth';

export default function ProfileInfoForm() {
  const { token } = useAuth();
  const { profile, updateProfile } = useProfile(token);
  const [readOnly, setReadOnly] = useState<boolean>(true);

  const { email, firstName, lastName, phone, taxation } = profile?.data ?? {};

  const formattedPhone = formatPhone('' + phone);

  const defaultValues = {
    email,
    firstName,
    lastName,
    phone: formattedPhone,
    taxation,
  };

  const { control, handleSubmit, formState } = useForm({
    defaultValues,
    resolver: joiResolver(profileUpdateSchema),
    mode: 'onChange',
  } as FieldValues);

  const { isDirty } = formState;

  const editBtnOnClick = () => {
    setReadOnly(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (isDirty) {
      data.phone = phoneToNumbers(data.phone);
      updateProfile(data);
    }
    setReadOnly(true);
  };

  return (
    <Box>
      <StyledGrid container columns={12}>
        <StyledGrid container item sm={8} columns={12}>
          <ProfileInfoTextFields control={control} InputProps={{ readOnly }} />
        </StyledGrid>
        <StyledGrid container item sm={3}>
          <ProfileRadioGroup control={control} readOnly={readOnly} />
        </StyledGrid>
      </StyledGrid>
      <StyledBoxButton>
        {readOnly ? <ChangeButton onClick={editBtnOnClick} /> : <SaveButton onClick={handleSubmit(onSubmit)} />}
      </StyledBoxButton>
    </Box>
  );
}

const ChangeButton = ({ onClick, ...props }: ButtonProps) => (
  <StyledChangeButton variant="contained" type="button" onClick={onClick} {...props}>
    Змінити <StyledEditRoundedIcon />
  </StyledChangeButton>
);

const SaveButton = ({ onClick, ...props }: ButtonProps) => (
  <StyledSaveButton variant="contained" type="button" onClick={onClick} {...props}>
    Зберегти <StyledTaskAltRoundedIcon />
  </StyledSaveButton>
);

const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: '900px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1.25rem 3.25rem',
  },
}));

const StyledBoxButton = styled(Box)(() => ({
  display: 'flex',
  margin: '77px 0 0 5px',
}));

const StyledChangeButton = styled(Button)(() => ({
  backgroundColor: '#1D5279',
  borderRadius: '15px',
  padding: '15px',
  gap: '10px',
  boxShadow: '0px 0px 25px 0px rgba(29, 82, 121, 0.50)',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  textTransform: 'none',
}));

const StyledSaveButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  borderRadius: '15px',
  padding: '15px',
  gap: '10px',
  boxShadow: '0px 0px 25px 0px rgba(29, 82, 121, 0.50)',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: theme.palette.success.dark,
  },
}));

const StyledEditRoundedIcon = styled(EditRoundedIcon)(() => ({
  width: '17px',
  height: '17px',
}));

const StyledTaskAltRoundedIcon = styled(TaskAltRoundedIcon)(() => ({
  width: '17px',
  height: '17px',
}));
