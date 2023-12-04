import { TabPanel, TabPanelProps } from '@mui/lab';
import { DialogContentText, styled } from '@mui/material';
import { useEffect, useState } from 'react';

import DataList from './DataList';
import { CalculatorShortDataUnit } from '@/core/models/СalcData.model';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcData } from '@/core/hooks/useCalcData';
import { CalcFoldersUnit } from '@/core/models/CalcFolders.model';
import { DataListProvider } from '@/core/contexts/DataList.context';
import PopupLayoutWithActions from '@/components/ui/PopUpLayout/PopupLayoutWithActions';
import { useCalculations } from '@/core/hooks/useCalculations';
import { errorNotify } from '@/core/helpers/notifications';

export default function SavedDataTabPanel({ value, ...props }: TabPanelProps) {
  const { token } = useAuth();
  const { calcFolders, getAllFolders } = useCalcFolders(token);
  const { calcData, getOneFolderData, deleteData } = useCalcData(token);
  const { calculations, getCalculations, reset, redirection } = useCalculations(token);

  const [calcFoldersData, setCalcFoldersData] = useState<CalculatorShortDataUnit[] | null>(null);
  const [currentFolderId, setCurrentFolderId] = useState<string>('');

  const [deletingFile, setDeletingFile] = useState<CalcFoldersUnit | null>(null);
  const [isDeletingingFile, setIsDeletingFile] = useState(false);

  useEffect(() => {
    if (!currentFolderId && !calcFolders.data && !calcFolders.pending) {
      getAllFolders();
    }
  }, [calcFolders, getAllFolders, currentFolderId]);

  useEffect(() => {
    if (calculations.data && !calculations.redirected) {
      redirection();
    } else if (calculations.error) {
      errorNotify('Помилка завантаження даних!');
      reset();
    }
  }, [calculations.data, calculations.error, calculations.redirected, redirection, reset]);

  const handleClickOpenFolder = (id: string) => {
    if (!calcFolders.pending) {
      getOneFolderData(id);
      setCurrentFolderId(id);
    }
  };

  const handleClickOpenFile = (fileId: string) => {
    getCalculations(currentFolderId, fileId);
  };

  const handleGoBack = () => {
    setCurrentFolderId('');
  };

  const handleClickedDeleteData = (data: CalcFoldersUnit) => {
    setIsDeletingFile(true);
    setDeletingFile(data);
  };

  const DeleteFileAction = () => {
    deletingFile && currentFolderId && deleteData(currentFolderId, deletingFile.id);
    setIsDeletingFile(false);
  };

  const handleCloseDeletingPopUp = () => {
    setIsDeletingFile(false);
  };

  useEffect(() => {
    if (calcFolders.data && !currentFolderId) setCalcFoldersData([...calcFolders.data]);
    if (calcData.data && currentFolderId) setCalcFoldersData([...calcData.data.data] as CalculatorShortDataUnit[]);
  }, [calcFolders, calcData, currentFolderId]);

  return (
    <StyledTabPanel value={value} {...props}>
      <DataListProvider
        items={calcFoldersData}
        folderOnClick={handleClickOpenFolder}
        fileOnClick={handleClickOpenFile}
        fileDeleteOnClick={handleClickedDeleteData}
        goBack={handleGoBack}
        type={currentFolderId ? 'files' : 'folders'}
      >
        <DataList />
      </DataListProvider>

      <PopupLayoutWithActions
        handleClose={handleCloseDeletingPopUp}
        open={isDeletingingFile}
        title="Видалення файлу"
        agreeBtnText="Видалити"
        agreeBtnAction={DeleteFileAction}
      >
        <DialogContentText id="alert-dialog-description">
          Ви впевнені, що хочете видалити файл "{deletingFile?.name}"?
        </DialogContentText>
      </PopupLayoutWithActions>
    </StyledTabPanel>
  );
}

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: '0',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '-1.25rem',
}));
