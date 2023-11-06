import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FixedCostsCaclLayout() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData = [
    {
      id: 'panel1',
      title: 'Продукт',
      content: 'Содержимое продукта 1',
    },
    {
      id: 'panel2',
      title: 'Витрати',
      content: 'Содержимое продукта 2',
    },
    {
      id: 'panel3',
      title: 'Виплати заробтної плати',
      content: 'Содержимое продукта 3',
    },
    {
      id: 'panel4',
      title: 'Плата за оренду',
      content: 'Содержимое продукта 4',
    },
    {
      id: 'panel5',
      title: 'Комунальні витрати',
      content: 'Содержимое продукта 5',
    },
  ];

  return (
    <>
      {accordionData.map((item) => (
        <CustomAccordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary', textAlign: 'center' }} />}
            aria-controls={`${item.id}bh-content`}
            id={`${item.id}bh-header`}
          >
            <Typography textAlign="center" width="100%">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </>
  );
}

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  boxShadow: 'none',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  margin: '15px',
}));
