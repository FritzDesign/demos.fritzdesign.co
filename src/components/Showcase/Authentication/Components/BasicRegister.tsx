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

const BasicRegister: React.FC = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isValid, setIsValid] = useState({
    email: false,
    passwordLength: false,
    passwordHasCapital: false,
    passwordHasSymbol: false,
    passwordsMatch: false,
    all: false
  });

  const updateValidateFields = ({
    fieldType,
    value
  }: {
    fieldType: 'name' | 'email' | 'password' | 'confirmPassword';
    value: string;
  }) => {
    setFields((prev) => ({ ...prev, [fieldType]: value }));
  };

  useEffect(() => {
    if (
      fields.email.includes('@') &&
      fields.email.includes('.') &&
      fields.email.charAt(fields.email.length - 1) !== '.' &&
      fields.email.charAt(fields.email.length - 1) !== '@' &&
      fields.email.lastIndexOf('.') > fields.email.indexOf('@')
    ) {
      setIsValid((prev) => ({ ...prev, email: true }));
    } else {
      setIsValid((prev) => ({ ...prev, email: false }));
    }

    if (fields.password.length >= 8) {
      setIsValid((prev) => ({ ...prev, passwordLength: true }));
    } else {
      setIsValid((prev) => ({ ...prev, passwordLength: false }));
    }

    if (
      fields.password.match(
        /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*\(\)\;\'\:\"\{\}])/
      )
    ) {
      setIsValid((prev) => ({ ...prev, passwordHasSymbol: true }));
    } else {
      setIsValid((prev) => ({ ...prev, passwordHasSymbol: false }));
    }

    if (fields.password.toLowerCase() !== fields.password) {
      setIsValid((prev) => ({ ...prev, passwordHasCapital: true }));
    } else {
      setIsValid((prev) => ({ ...prev, passwordHasCapital: false }));
    }

    if (fields.password === fields.confirmPassword && isValid.passwordLength) {
      setIsValid((prev) => ({ ...prev, passwordsMatch: true }));
    } else {
      setIsValid((prev) => ({ ...prev, passwordsMatch: false }));
    }
  }, [fields]);

  useEffect(() => {
    if (
      isValid.email &&
      isValid.passwordLength &&
      isValid.passwordHasCapital &&
      isValid.passwordHasSymbol &&
      isValid.passwordsMatch
    ) {
      setIsValid((prev) => ({ ...prev, all: true }));
    } else {
      setIsValid((prev) => ({ ...prev, all: false }));
    }
  }, [isValid]);
  console.log(fields);

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
            <Stack>
              <HStack gap='.5rem'>
                <Icon
                  fontSize='20'
                  color={isValid.email ? 'green.300' : 'red.300'}
                  as={
                    isValid.email ? AiOutlineCheckCircle : AiOutlineCloseCircle
                  }
                />
                <Text>Valid E-mail</Text>
              </HStack>
              <HStack gap='.5rem'>
                <Icon
                  fontSize='20'
                  color={isValid.passwordLength ? 'green.300' : 'red.300'}
                  as={
                    isValid.passwordLength
                      ? AiOutlineCheckCircle
                      : AiOutlineCloseCircle
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
                    isValid.passwordsMatch
                      ? AiOutlineCheckCircle
                      : AiOutlineCloseCircle
                  }
                />
                <Text>Passwords Match</Text>
              </HStack>
            </Stack>
          </Stack>
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
