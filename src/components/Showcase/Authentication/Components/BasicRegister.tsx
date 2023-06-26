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
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import Logo from '../Shared/Logo';
import React, { useEffect, useState } from 'react';
import OAuthButtons from '../Shared/OAuthButtons';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import useValidateFields from '../../../../hooks/useValidateFields';
import ValidationUI from '../Shared/ValidationUI';
import MandatoryRegistrationFields from '../Shared/MandatoryRegistrationFields';
import { ComponentProps } from '../models/Props';

export interface FieldTypeWithValue {
  fieldType: 'name' | 'email' | 'password' | 'confirmPassword';
  value: string;
}

const BasicRegister: React.FC<ComponentProps> = ({ variant }) => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const isValid = useValidateFields(fields);

  const updateValidateFields = ({ fieldType, value }: FieldTypeWithValue) => {
    setFields((prev) => ({ ...prev, [fieldType]: value }));
  };

  if (variant === 'variant1') {
    return <Container maxW='md'></Container>;
  }

  if (variant === 'variant2') {
    return <Container maxW='md'></Container>;
  }

  return (
    <Container maxW='md'>
      <Stack spacing='8'>
        <Stack spacing='6' align='center'>
          <Logo />
          <Stack spacing='3' textAlign='center'>
            <Heading size={{ base: 'xs', md: 'sm' }}>Create an account</Heading>
            <Text>Start making your dreams come true</Text>
          </Stack>
        </Stack>
        <Stack spacing='6'>
          <Stack spacing='5'>
            <FormControl isRequired>
              <FormLabel
                htmlFor='name'
                requiredIndicator={
                  <Text
                    as='span'
                    pl='4px'
                    color={useColorModeValue('red.600', 'red.300')}
                  >
                    *
                  </Text>
                }
              >
                Name
              </FormLabel>
              <Input
                id='name-br'
                type='text'
                onChange={(e) =>
                  updateValidateFields({
                    fieldType: 'name',
                    value: e.target.value
                  })
                }
              />
            </FormControl>
            <MandatoryRegistrationFields
              updateValidateFields={updateValidateFields}
            />
          </Stack>
          <ValidationUI isValid={isValid} />
          <Stack spacing='6'>
            <Button variant='primary' isDisabled={!isValid.all}>
              Sign up
            </Button>
            <HStack>
              <Divider />
              <Text textStyle='sm' whiteSpace='nowrap'>
                or sign up with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtons />
          </Stack>
        </Stack>
        <HStack justify='center' spacing='1'>
          <Text textStyle='sm'>Already have an account?</Text>
          <Button variant='text' size='sm'>
            Log in
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
};

export default BasicRegister;
