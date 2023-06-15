import React from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';
import VariationTabs from './VariationTabs';

interface Props {
  name: string;
  component: React.ReactNode;
}

const DisplayWindow: React.FC<Props> = ({ name, component }) => {
  return (
    <Stack w='100%' py='2rem'>
      <Heading size='md' color='whiteAlpha.800'>
        {name}
      </Heading>
      <VariationTabs />
      <Box w='100%' bgColor='gray.700' borderRadius='8px' px='2rem' py='4rem'>
        {component}
      </Box>
    </Stack>
  );
};

export default DisplayWindow;
