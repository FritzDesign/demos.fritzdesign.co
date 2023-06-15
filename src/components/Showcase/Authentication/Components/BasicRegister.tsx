import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text
} from '@chakra-ui/react';
import Logo from '../Shared/Logo';
import React, { useEffect, useState } from 'react';
import OAuthButtons from '../Shared/OAuthButtons';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import useValidateFields from '../../../../hooks/useValidateFields';
import ValidationUI from '../Shared/ValidationUI';

const BasicRegister: React.FC = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const isValid = useValidateFields(fields);

  const updateValidateFields = ({
    fieldType,
    value
  }: {
    fieldType: 'name' | 'email' | 'password' | 'confirmPassword';
    value: string;
  }) => {
    setFields((prev) => ({ ...prev, [fieldType]: value }));
  };

  return (
    <Container maxW='md'>
      <Stack spacing='8' color='whiteAlpha.900'>
        <Stack spacing='6' align='center'>
          <Logo />
          <Stack spacing='3' textAlign='center'>
            <Heading size={{ base: 'xs', md: 'sm' }}>Create an account</Heading>
            <Text color='whiteAlpha.800'>
              Start making your dreams come true
            </Text>
          </Stack>
        </Stack>
        <Stack spacing='6'>
          <Stack spacing='5'>
            <FormControl isRequired>
              <FormLabel
                htmlFor='name'
                requiredIndicator={
                  <Text as='span' pl='4px' color='red.300'>
                    *
                  </Text>
                }
              >
                Name
              </FormLabel>
              <Input
                id='name-br'
                type='text'
                color='gray.900'
                onChange={(e) =>
                  updateValidateFields({
                    fieldType: 'name',
                    value: e.target.value
                  })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                htmlFor='email'
                requiredIndicator={
                  <Text as='span' pl='4px' color='red.300'>
                    *
                  </Text>
                }
              >
                Email
              </FormLabel>
              <Input
                id='email-br'
                type='email'
                color='gray.900'
                onChange={(e) =>
                  updateValidateFields({
                    fieldType: 'email',
                    value: e.target.value
                  })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                htmlFor='password'
                requiredIndicator={
                  <Text as='span' pl='4px' color='red.300'>
                    *
                  </Text>
                }
              >
                Password
              </FormLabel>
              <Input
                id='password-br'
                type='password'
                color='gray.900'
                onChange={(e) =>
                  updateValidateFields({
                    fieldType: 'password',
                    value: e.target.value
                  })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                htmlFor='password'
                requiredIndicator={
                  <Text as='span' pl='4px' color='red.300'>
                    *
                  </Text>
                }
              >
                Confirm Password
              </FormLabel>
              <Input
                id='confirm-password-br'
                type='password'
                color='gray.900'
                onChange={(e) =>
                  updateValidateFields({
                    fieldType: 'confirmPassword',
                    value: e.target.value
                  })
                }
              />
            </FormControl>
          </Stack>
          <ValidationUI isValid={isValid} />
          <Stack spacing='6'>
            <Button variant='primary' isDisabled={!isValid.all}>
              Sign up
            </Button>
            <HStack>
              <Divider />
              <Text textStyle='sm' whiteSpace='nowrap' color='whiteAlpha.800'>
                or sign up with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtons />
          </Stack>
        </Stack>
        <HStack justify='center' spacing='1'>
          <Text textStyle='sm' color='whiteAlpha.800'>
            Already have an account?
          </Text>
          <Button variant='text' size='sm' color='blue.300'>
            Log in
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
};

export default BasicRegister;
