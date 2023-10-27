import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ExpensesFields from '../ExpensesFields';

export default function PopupLayout({ handleClose, open }: { handleClose: () => void, open: boolean }) {

  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <DialogTitle color={'text.secondary'} id="responsive-dialog-title">
        Потрібна допомога з розрахунком?
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          <ExpensesFields />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
