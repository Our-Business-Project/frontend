import React from 'react';
import { IconButton, IconButtonProps, IconProps, Tooltip, TooltipProps } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const CrossButton = ({
  title = 'Закрити',
  placement = 'top',
  fontSize = 'small',
  ...props
}: TooltipProps & IconButtonProps & IconProps) => {
  return (
    <Tooltip title={title} placement={placement}>
      <IconButton aria-label={title} {...props}>
        <CloseRoundedIcon fontSize={fontSize} />
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(CrossButton);
