import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text
} from '@chakra-ui/react';
import OAuthButtons from '../Shared/OAuthButtons';
import PasswordField from '../Shared/PasswordField';
import Logo from '../Shared/Logo';

const BasicLogin: React.FC = () => {
  return (
    <Container
      maxW='lg'
      color='whiteAlpha.900'
    >
      <Stack spacing='8'>
        <Stack spacing='6'>
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading color='whiteAlpha.900' size={{ base: 'xs', md: 'sm' }}>
              Log in to your account
            </Heading>
            <HStack spacing='1' justify='center'>
              <Text color='whiteAlpha.800'>Don't have an account?</Text>
              <Button color='blue.300' variant='text' size='lg'>
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
          bgColor='gray.900'
        >
          <Stack spacing='6'>
            <Stack spacing='5'>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' color='gray.900' />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button color='blue.300' variant='text' size='sm'>
                Forgot password?
              </Button>
            </HStack>
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
        </Box>
      </Stack>
    </Container>
  );
};

export default BasicLogin;
