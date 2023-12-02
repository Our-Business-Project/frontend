import { TabPanel, TabPanelProps } from '@mui/lab';
import { styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

import DataList from './DataList';
import { CalculatorShortDataUnit } from '@/core/models/СalcData.model';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcData } from '@/core/hooks/useCalcData';
import { CalcFolders } from '@/core/models/CalcFolders.model';
import { DataListProvider } from '@/core/contexts/DataList.context';

export default function SavedDataTabPanel({ value, ...props }: TabPanelProps) {
  const { token } = useAuth();
  const { calcFolders, getAllFolders } = useCalcFolders(token);
  const { calcData, getOneFolderData, getOneFileData } = useCalcData(token);

  const [calcFoldersData, setCalcFoldersData] = useState<CalcFolders | CalculatorShortDataUnit[] | null>(null);
  const [currentFolderId, setCurrentFolderId] = useState<string>('');

  useEffect(() => {
    if (!currentFolderId && !calcFolders.data && !calcFolders.pending) {
      getAllFolders();
    }
  }, [calcFolders, getAllFolders, currentFolderId]);

  useEffect(() => {
    if (currentFolderId && calcData.data && Object.keys(calcData.data.data).includes('ProductionPlan')) {
      redirect('/');
    }
  });

  const handleClickOpenFolder = (id: string) => {
    if (!calcFolders.pending) {
      getOneFolderData(id);
      setCurrentFolderId(id);
    }
  };

  const handleClickOpenFile = (fileId: string) => {
    getOneFileData(currentFolderId, fileId);
  };

  const handleGoBack = () => {
    setCurrentFolderId('');
  };

  useEffect(() => {
    if (calcFolders.data && !currentFolderId) setCalcFoldersData(calcFolders.data);
    if (calcData.data && currentFolderId) setCalcFoldersData(calcData.data.data as CalculatorShortDataUnit[]);
  }, [calcFolders, calcData, currentFolderId]);

  return (
    <StyledTabPanel value={value} {...props}>
      <DataListProvider
        items={calcFoldersData}
        folderOnClick={handleClickOpenFolder}
        fileOnClick={handleClickOpenFile}
        goBack={handleGoBack}
        type={currentFolderId ? 'files' : 'folders'}
      >
        <DataList />
      </DataListProvider>
    </StyledTabPanel>
  );
}

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: '0',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '-1.25rem',
}));
