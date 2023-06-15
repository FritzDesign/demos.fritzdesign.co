import React from 'react';
import {
  HStack,
  Icon,
  Switch,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent='flex-end' pr='2rem' py='1rem'>
      <Icon
        color={useColorModeValue('blackAlpha.700', 'yellow.300')}
        fontSize='16'
        as={FaSun}
      />
      <Switch
        colorScheme='blue'
        onChange={toggleColorMode}
        isChecked={colorMode === 'dark'}
      />
      <Icon
        color={useColorModeValue('black.900', 'gray.300')}
        fontSize='16'
        as={FaMoon}
      />
    </HStack>
  );
};

export default ThemeToggle;
