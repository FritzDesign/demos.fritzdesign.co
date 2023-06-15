import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Icon,
  Stack,
  Switch,
  useColorModeValue
} from '@chakra-ui/react';
import VariationTabs from './VariationTabs';
import ThemeToggle from '../../../Shared/ThemeToggle';

interface Props {
  name: string;
  component: React.ReactNode;
  setPreviewIndex: ({
    groupIndex,
    componentIndex
  }: {
    groupIndex: number;
    componentIndex: number;
    }) => void;
    grpIndex: number;
  hasDarkMode?: boolean;
}

const DisplayWindow: React.FC<Props> = ({
  name,
  component,
  setPreviewIndex,
  grpIndex,
  hasDarkMode = false
}) => {
  return (
    <Stack w='100%' py='2rem'>
      <Heading size='md' color='whiteAlpha.800'>
        {name}
      </Heading>
      <VariationTabs grpIndex={grpIndex} setPreviewIndex={setPreviewIndex} />
      <Box
        w='100%'
        bgColor={useColorModeValue('whiteAlpha.800', 'gray.700')}
        borderRadius='8px'
        px='2rem'
        py='4rem'
      >
        {hasDarkMode && <ThemeToggle />}
        {component}
      </Box>
    </Stack>
  );
};

export default DisplayWindow;
