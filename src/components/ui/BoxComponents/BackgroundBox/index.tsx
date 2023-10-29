import { Box, BoxProps, styled } from '@mui/material';
import { Props } from './props';

export default function BackgroundBox({ imageUrl, children, ...props }: Props & BoxProps) {
  return (
    <CustomBox imageurl={imageUrl} {...props}>
      {children}
    </CustomBox>
  );
}

const CustomBox = styled(Box)(({ imageurl }: { imageurl: string }) => ({
  padding: '0',
  margin: '0',
  backgroundImage: `url(${imageurl})`,
  backgroundSize: 'cover',
  backgroundPosition: ' center center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  backgroundAttachment: 'fixed',
}));
