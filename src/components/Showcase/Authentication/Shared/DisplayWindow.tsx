import React, { useState } from 'react';
import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import VariationTabs from './VariationTabs';
import ThemeToggle from '../../../Shared/ThemeToggle';

interface Props {
  name: string;
  component: React.ReactElement;
  hasDarkMode?: boolean;
}

const DisplayWindow: React.FC<Props> = ({
  name,
  component,
  hasDarkMode = false
}) => {
  const [variant, setVariant] = useState('default');
  return (
    <Stack w='100%' py='2rem'>
      <Heading size='md' color='whiteAlpha.800'>
        {name}
      </Heading>
      <VariationTabs variant={variant} setVariant={setVariant} />
      <Box
        w='100%'
        bgColor={useColorModeValue('whiteAlpha.800', 'gray.700')}
        borderRadius='8px'
        pb='2rem'
        px='0rem'
        border='1px solid #2c2c2c'
      >
        {hasDarkMode && <ThemeToggle />}
        {React.cloneElement(component, {variant, setVariant})}
      </Box>
    </Stack>
  );
};

export default DisplayWindow;
