import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text
} from '@chakra-ui/react';
import Logo from '../Shared/Logo';
import React from 'react';
import OAuthButtons from '../Shared/OAuthButtons';

const BasicRegister: React.FC = () => (
  <Container maxW='md'>
    <Stack spacing='8' color='whiteAlpha.900'>
      <Stack spacing='6' align='center'>
        <Logo />
        <Stack spacing='3' textAlign='center'>
          <Heading size={{ base: 'xs', md: 'sm' }}>Create an account</Heading>
          <Text color='whiteAlpha.800'>Start making your dreams come true</Text>
        </Stack>
      </Stack>
      <Stack spacing='6'>
        <Stack spacing='5'>
          <FormControl isRequired>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input id='name' type='text' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='email' requiredIndicator={<Box color='red.300'>*</Box>}>Email</FormLabel>
            <Input id='email' type='email' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password' type='password' />
            <FormHelperText color='whiteAlpha.800'>
              At least 8 characters long
            </FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='password'>Confirm Password</FormLabel>
            <Input id='password' type='password' />
          </FormControl>
        </Stack>
        <Stack spacing='6'>
              <Button variant='primary'>Sign in</Button>
              <HStack>
                <Divider />
                <Text textStyle='sm' whiteSpace='nowrap' color='whiteAlpha.800'>
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtons />
            </Stack>
      </Stack>
      <HStack justify='center' spacing='1'>
        <Text textStyle='sm' color='fg.muted'>
          Already have an account?
        </Text>
        <Button variant='text' size='sm'>
          Log in
        </Button>
      </HStack>
    </Stack>
  </Container>
);

export default BasicRegister;
