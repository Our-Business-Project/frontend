'use client';
import * as React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

export default function PopupLayoutWithoutActions({
  handleClose,
  open,
  title,
  children,
  isPending,
}: {
  handleClose: () => void;
  open: boolean;
  title: string;
  children: React.ReactNode;
  isPending: boolean;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StiledDialog fullScreen={fullScreen} maxWidth="sm" open={open} onClose={handleClose}>
      {isPending && <LinearProgress />}
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <DialogTitle color="text.secondary">{title}</DialogTitle>
        <IconButton onClick={handleClose} sx={{ padding: '16px 24px' }}>
          <CloseIcon color="primary" />
        </IconButton>
      </Box>

      <DialogContent dividers>{children}</DialogContent>
      <Button color="primary"></Button>
    </StiledDialog>
  );
}

const StiledDialog = styled(Dialog)`
  margin: '0 auto';
  height: '800px';
`;
