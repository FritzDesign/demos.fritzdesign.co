import React from 'react';
import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';


interface Props {
  isValid: {
    email: boolean;
    passwordLength: boolean;
    passwordHasCapital: boolean;
    passwordHasSymbol: boolean;
    passwordsMatch: boolean;
    all: boolean;
  };
}

const ValidationUI: React.FC<Props> = ({ isValid }) => {
  return (
    <Stack>
      <HStack gap='.5rem'>
        <Icon
          fontSize='20'
          color={isValid.email ? 'green.300' : 'red.300'}
          as={isValid.email ? AiOutlineCheckCircle : AiOutlineCloseCircle}
        />
        <Text>Valid E-mail</Text>
      </HStack>
      <HStack gap='.5rem'>
        <Icon
          fontSize='20'
          color={isValid.passwordLength ? 'green.300' : 'red.300'}
          as={
            isValid.passwordLength ? AiOutlineCheckCircle : AiOutlineCloseCircle
          }
        />
        <Text>Password is at least 8 characters</Text>
      </HStack>
      <HStack gap='.5rem'>
        <Icon
          fontSize='20'
          color={isValid.passwordHasCapital ? 'green.300' : 'red.300'}
          as={
            isValid.passwordHasCapital
              ? AiOutlineCheckCircle
              : AiOutlineCloseCircle
          }
        />
        <Text>Password contains a capital letter</Text>
      </HStack>
      <HStack gap='.5rem'>
        <Icon
          fontSize='20'
          color={isValid.passwordHasSymbol ? 'green.300' : 'red.300'}
          as={
            isValid.passwordHasSymbol
              ? AiOutlineCheckCircle
              : AiOutlineCloseCircle
          }
        />
        <Text>Password contains a special character</Text>
      </HStack>
      <HStack gap='.5rem'>
        <Icon
          fontSize='20'
          color={isValid.passwordsMatch ? 'green.300' : 'red.300'}
          as={
            isValid.passwordsMatch ? AiOutlineCheckCircle : AiOutlineCloseCircle
          }
        />
        <Text>Passwords Match</Text>
      </HStack>
    </Stack>
  );
};

export default ValidationUI;
