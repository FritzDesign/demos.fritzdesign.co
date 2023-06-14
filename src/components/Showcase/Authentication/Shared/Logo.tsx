import React from 'react';
import { AspectRatio, Image, Stack } from '@chakra-ui/react';
import logo from '../../../../assets/logo-placeholder-image.webp';

const Logo: React.FC = () => {
  return (
    <Stack h='100%' w='100%' alignItems='center' justifyContent='center'>
      <AspectRatio w='48px' ratio={1}>
        <Image src={logo} />
      </AspectRatio>
    </Stack>
  );
};

export default Logo;
