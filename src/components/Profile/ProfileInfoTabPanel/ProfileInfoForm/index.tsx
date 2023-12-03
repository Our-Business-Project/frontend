import { useEffect, useMemo, useState } from 'react';
import { Box, Grid, styled, Button, ButtonProps, CircularProgress } from '@mui/material';
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

  const defaultValues = useMemo(
    () => ({
      email,
      firstName,
      lastName,
      phone: formattedPhone,
      taxation,
    }),
    [email, firstName, formattedPhone, lastName, taxation]
  );

  const { control, handleSubmit, formState, reset } = useForm({
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

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const loader = profile.infoPending && <StyledCircularProgress size="1.625rem" />;

  return (
    <StyledBox>
      <StyledGrid container columns={12}>
        <StyledGrid container item sm={12} md={6} lg={8} columns={12}>
          <ProfileInfoTextFields control={control} InputProps={{ readOnly }} />
        </StyledGrid>
        <StyledGrid container item sm={12} md={5} lg={3}>
          <ProfileRadioGroup control={control} readOnly={readOnly} />
        </StyledGrid>
      </StyledGrid>
      <StyledBoxButton>
        {readOnly ? (
          <ChangeButton onClick={editBtnOnClick} disabled={profile.infoPending} />
        ) : (
          <SaveButton onClick={handleSubmit(onSubmit)} disabled={profile.infoPending} />
        )}
        {loader}
      </StyledBoxButton>
    </StyledBox>
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

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: '900px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('smmd')]: {
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1.25rem 3.25rem',
  },
}));

const StyledBoxButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  margin: '4.8125rem 0 0 0.3125rem',

  [theme.breakpoints.down('smmd')]: {
    justifyContent: 'center',
    margin: '2.8125rem 0 0 0.3125rem',
  },
}));

const StyledChangeButton = styled(Button)(({ theme }) => ({
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

  [theme.breakpoints.down('smmd')]: {
    width: '200px',
  },
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

  [theme.breakpoints.down('smmd')]: {
    width: '200px',
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

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.success.light,
}));
