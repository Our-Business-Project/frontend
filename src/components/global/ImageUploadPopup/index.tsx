import { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';

import ImageUploadBox from './ImageUploadBox';
import { Props } from './props';

export default function ImageUploadPopup({ open, onClose, onSave }: Props) {
  const onChangeHandler = (file: File | null) => {
    if (file) {
      onSave(file);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <ImageUploadBox onChange={onChangeHandler} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
