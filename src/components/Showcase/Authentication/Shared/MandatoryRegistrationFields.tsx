import React from 'react';
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { FieldTypeWithValue } from '../Components/BasicRegister';

interface Props {
  updateValidateFields: ({ fieldType, value }: FieldTypeWithValue) => void;
}

const MandatoryRegistrationFields: React.FC<Props> = ({
  updateValidateFields
}) => {
  return (
    <>
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
    </>
  );
};

export default MandatoryRegistrationFields;
