import React from 'react';
import { AspectRatio, Image, Stack } from '@chakra-ui/react';
import logo from '../../../../assets/logo-placeholder-image.webp';

interface Props {
  width?: number;
}

const Logo: React.FC<Props> = ({ width = 96 }) => {
  return (
    <Stack h='100%' w='100%' alignItems='center' justifyContent='center'>
      <AspectRatio w={width + 'px'} ratio={1}>
        <Image src={logo} />
      </AspectRatio>
    </Stack>
  );
};

export default Logo;
