'use client';
import * as React from 'react';
import { Box, List, styled } from '@mui/material';
import { CalcFolders } from '@/core/models/CalcFolders.model';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useProfile } from '@/core/hooks/useProfile';
import FolderContent from './FoldersContent';
import FilesContent from './FilesContent';
import { useCalcData } from '@/core/hooks/useCalcData';
import { CalculatorDataIncome } from '@/core/models/СalcData.model';

export default function PopUpContent() {
  const [calcFoldersData, setCalcFoldersData] = React.useState<CalcFolders | CalculatorDataIncome | null>(null);
  const [isFolderOpened, setIsFolderOpened] = React.useState(false);
  const { isAuthenticated, token, userId } = useAuth();
  const { loadProfile } = useProfile(token);
  const { calcFolders, getAllFolders, deleteFolder } = useCalcFolders(token);
  const { calcData, getOneFolderData } = useCalcData(token);

  useEffect(() => {
    if (userId) {
      getAllFolders();
      loadProfile(userId);
    } else {
      redirect('/sign-in');
    }
  }, [isAuthenticated, getAllFolders]);

  const handleClickdOpenFolder = (id: string) => {
    getOneFolderData(id);
    setIsFolderOpened(true);
  };

  useEffect(() => {
    if (calcFolders.data && !isFolderOpened) setCalcFoldersData(calcFolders.data);
    if (calcData.data && isFolderOpened) setCalcFoldersData(calcData.data);
  }, [calcFolders, calcData]);

  return (
    <List sx={{ scrollBehavior: 'auto', position: 'relative' }}>
      {isFolderOpened ? (
        <FilesContent calcFoldersData={calcFoldersData} />
      ) : (
        <FolderContent
          handleClickdOpenFolder={handleClickdOpenFolder}
          calcFoldersData={calcFoldersData}
        ></FolderContent>
      )}
    </List>
  );
}
