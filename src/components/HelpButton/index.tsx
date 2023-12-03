import * as React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import PopupLayoutWithoutActions from '../ui/PopUpLayout/PopupLayoutWithoutActions';
import GreenCustomButton from '../ui/GreenCustomButton';
import { useCalculations } from '@/core/hooks/useCalculations';
import { CalcContext } from '@/core/contexts/Calc.context';
import { FixedCostsContext } from '@/core/contexts/FixedCosts.context';
import { redirect } from 'next/navigation';

export function HelpButton() {
  const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);
  const { calculations, getCalculationsExample } = useCalculations();
  const calcContext = React.useContext(CalcContext);
  const fixedCostsContext = React.useContext(FixedCostsContext);

  if (!fixedCostsContext || !calcContext) {
    redirect('/404');
  }

  const { updateAllCalContextData } = calcContext;
  const { updateAllFixedCostsContext } = fixedCostsContext;

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleClickExample = (event: any) => {
    getCalculationsExample();
    handleClosePopUp();
    redirect('/#calculatorTabs');
  };

  React.useEffect(() => {
    if (calculations.data) {
      updateAllCalContextData(calculations.data.data);
      updateAllFixedCostsContext(calculations.data.fixedCosts);
    }
  }, [calculations]);

  return (
    <>
      <IconButton onClick={() => setIsPopUpOpen(true)}>
        <HelpIcon color="primary" />
      </IconButton>
      <PopupLayoutWithoutActions
        handleClose={handleClosePopUp}
        open={isPopUpOpen}
        title="Потрібна допомога?"
        isPending={false}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ margin: '10px 0' }} color="text.secondary" variant="body1" textAlign="center">
            Ви можете переглянути коротку інструкцію по користуванню сайтом, а потім потренуватись на даних з відео
            самостійно
          </Typography>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/0LOpjYHV02c?si=GNYgoSYRoxVAxFym&amp;start=10"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <GreenCustomButton
            buttonText=" Завантажити тренувальні дані"
            handleClick={(event) => handleClickExample(event)}
          ></GreenCustomButton>
        </Box>
      </PopupLayoutWithoutActions>
    </>
  );
}
