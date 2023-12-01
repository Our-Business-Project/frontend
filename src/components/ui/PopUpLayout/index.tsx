'use client';
import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  Box,
  LinearProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

export default function PopupLayout({
  handleClose,
  open,
  title,
  successBtnText,
  children,
  isPending,
}: {
  handleClose: () => void;
  open: boolean;
  title: string;
  successBtnText: string;
  children: React.ReactNode;
  isPending: boolean;
}) {
  return (
    <StiledDialog maxWidth="md" open={open} onClose={handleClose}>
      {isPending && <LinearProgress />}
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <DialogTitle color={'text.secondary'} id="responsive-dialog-title">
          {title}
        </DialogTitle>
        <IconButton onClick={handleClose} sx={{ padding: '16px 24px' }}>
          <CloseIcon color="primary" />
        </IconButton>
      </Box>

      <DialogContent dividers>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{successBtnText}</Button>
      </DialogActions>
    </StiledDialog>
  );
}

const StiledDialog = styled(Dialog)(({ theme }) => ({
  margin: '0 auto',
  height: '800px',
  width: '600px',
  [theme.breakpoints.down('md')]: {
    width: '430px',
  },
}));
