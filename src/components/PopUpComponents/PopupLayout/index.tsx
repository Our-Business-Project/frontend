import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from '@mui/material';

export default function PopupLayout({
  handleClose,
  open,
  title,
  successBtnText,
  checkbox,
}: {
  handleClose: () => void;
  open: boolean;
  title: string;
  successBtnText: string;
  checkbox?: boolean | false;
}) {
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <DialogTitle color={'text.secondary'} id="responsive-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>{/* <ExpensesFields /> */}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {checkbox ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              margin: '0 10px',
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography color="text.secondary" variant="body2">
                  Більше не запитувати
                </Typography>
              }
            />
            <Box>
              <ActionButtons handleClose={handleClose} successBtnText={successBtnText} />
            </Box>
          </Box>
        ) : (
          <ActionButtons handleClose={handleClose} successBtnText={successBtnText} />
        )}
      </DialogActions>
    </Dialog>
  );
}

function ActionButtons({ handleClose, successBtnText }: { handleClose: () => void; successBtnText: string }) {
  return (
    <>
      <Button onClick={handleClose}>Закрити</Button>
      <Button onClick={handleClose}>{successBtnText}</Button>
    </>
  );
}
