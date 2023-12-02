'use client';
import * as React from 'react';
import { Box, List, Typography } from '@mui/material';
import { redirect } from 'next/navigation';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useProfile } from '@/core/hooks/useProfile';
import FolderContent from './FoldersContent';
import FilesContent from './FilesContent';
import { useCalcData } from '@/core/hooks/useCalcData';
import { CalculatorDataIncome } from '@/core/models/СalcData.model';
import { CalcFolders } from '@/core/models/CalcFolders.model';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';

export default function PopUpContent() {
  const [calcFoldersData, setCalcFoldersData] = React.useState<CalcFolders | null>(null);
  const [calcFilesData, setCalcFilesData] = React.useState<CalculatorDataIncome | null>(null);
  const [isFolderOpened, setIsFolderOpened] = React.useState(false);
  const { isAuthenticated, token, userId } = useAuth();
  const { loadProfile } = useProfile(token);
  const { calcFolders, getAllFolders } = useCalcFolders(token);
  const { calcData, getOneFolderData } = useCalcData(token);

  React.useEffect(() => {
    if (userId) {
      getAllFolders();
      loadProfile(userId);
    } else {
      redirect('/sign-in');
    }
  }, [isAuthenticated, getAllFolders, isFolderOpened]);

  const handleClickdOpenFolder = (id: string) => {
    getOneFolderData(id);
    setIsFolderOpened(true);
  };

  React.useEffect(() => {
    setCalcFoldersData(calcFolders.data);
    setCalcFilesData(calcData.data);
  }, [calcFolders, calcData]);

  return (
    <>
      <List sx={{ scrollBehavior: 'auto', position: 'relative' }}>
        {isFolderOpened ? (
          <>
            <Box
              sx={{ textTransform: 'none', mb: '15px' }}
              onClick={() => setIsFolderOpened(false)}
              className={'mui-1q896iv-MuiButtonBase-root-MuiButton-root'}
            >
              <TurnLeftIcon color="primary" sx={{ mr: '10px' }} />
              <Typography>Повернутись </Typography>
            </Box>
            <FilesContent calcFoldersData={calcFilesData} />
          </>
        ) : (
          <FolderContent
            handleClickdOpenFolder={handleClickdOpenFolder}
            calcFoldersData={calcFoldersData}
          ></FolderContent>
        )}
      </List>
    </>
  );
}
