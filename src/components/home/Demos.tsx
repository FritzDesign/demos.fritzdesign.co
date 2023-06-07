import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import { Gallery } from './GalleryAnatomy/Gallery';
import { products } from './GalleryAnatomy/_images';

const Demos: React.FC = () => {
  return (
    <Box
      maxW='7xl'
      mx='auto'
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Gallery products={products} />
    </Box>
  );
};

export default Demos;
