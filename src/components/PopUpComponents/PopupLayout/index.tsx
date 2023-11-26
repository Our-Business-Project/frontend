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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function PopupLayout({
  handleClose,
  open,
  title,
  successBtnText,
  children,
}: {
  handleClose: () => void;
  open: boolean;
  title: string;
  successBtnText: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <DialogTitle color={'text.secondary'} id="responsive-dialog-title">
          {title}
        </DialogTitle>
        <IconButton onClick={handleClose} sx={{ padding: '16px 24px' }}>
          <CloseIcon color="primary" />
        </IconButton>
      </Box>

      <DialogContent dividers>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{successBtnText}</Button>
      </DialogActions>
    </Dialog>
  );
}
