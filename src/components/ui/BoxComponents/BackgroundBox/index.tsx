import { Box, BoxProps } from '@mui/material';
import { Props } from './props';

export default function BackgroundBox({ imageUrl, children, sx, ...props }: Props & BoxProps) {
  return (
    <Box
      sx={{
        padding: '0',
        margin: '0',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: ' center center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        backgroundAttachment: 'fixed',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
