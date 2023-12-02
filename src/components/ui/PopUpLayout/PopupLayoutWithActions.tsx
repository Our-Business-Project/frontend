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
  DialogContentText,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

export default function PopupLayoutWithActions({
  handleClose,
  open,
  title,
  agreeBtnText,
  agreeBtnAction,
  children,
}: {
  handleClose: () => void;
  open: boolean;
  title: string;
  agreeBtnText: string;
  agreeBtnAction: () => void;
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog color="success" fullScreen={fullScreen} maxWidth="sm" open={open} onClose={handleClose}>
      <DialogTitle color="text.secondary" id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button variant="contained" color="success" onClick={handleClose}>
          Відмінити
        </Button>
        <Button variant="contained" color="error" onClick={agreeBtnAction} autoFocus>
          {agreeBtnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// const StiledDialog = styled(Dialog)`
//   margin: '0 auto';
//   height: '800px';
// `;
