'use client';
import * as React from 'react';
import { Box } from '@mui/material';
import { CalcFolders } from '@/core/models/CalcFolders.model';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useProfile } from '@/core/hooks/useProfile';
import FolderContent from './FoldersContent';
import FilesContent from './FilesContent';

export default function PopUpContent() {
  const [calcFoldersData, setCalcFoldersData] = React.useState<CalcFolders | null>(null);
  const [isFolderOpened, setIsFolderOpened] = React.useState(false);
  const { isAuthenticated, token, userId } = useAuth();
  const { loadProfile } = useProfile(token);
  const { calcFolders, getAllFolders, getOneFolder } = useCalcFolders(token);

  useEffect(() => {
    if (userId) {
      getAllFolders();
      loadProfile(userId);
    } else {
      redirect('/sign-in');
    }
  }, [isAuthenticated, getAllFolders]);

  const handleClickdOpenFolder = (id: string) => {
    getOneFolder(id);
    setIsFolderOpened(true);
  };

  useEffect(() => {
    if (calcFolders.data) {
      setCalcFoldersData(calcFolders.data);
    }
  }, [calcFolders]);

  return (
    <Box position="relative">
      {isFolderOpened ? (
        <FilesContent calcFoldersData={calcFoldersData} />
      ) : (
        <FolderContent
          handleClickdOpenFolder={handleClickdOpenFolder}
          calcFoldersData={calcFoldersData}
        ></FolderContent>
      )}
    </Box>
  );
}
