import {
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
import Logo from './Logo';
import OAuthButtons from './OAuthButtons';

export const SignUpVariant = () => (
  <Container
    maxW='md'
    py={{ base: '0', sm: '8' }}
    px={{ base: '4', sm: '10' }}
    bg={{ base: 'transparent', sm: 'bg.surface' }}
    boxShadow={{ base: 'none', sm: 'md' }}
    borderRadius={{ base: 'none', sm: 'xl' }}
  >
    <Stack spacing='8'>
      <Stack spacing='6' align='center'>
        <Logo />
        <Stack spacing='3' textAlign='center'>
          <Heading size='xs'>Create an account</Heading>
          <HStack justify='center' spacing='1'>
            <Text color='fg.muted'>Already have an account?</Text>
            <Button variant='text'>Log in</Button>
          </HStack>
        </Stack>
      </Stack>
      <Stack spacing='6'>
        <Stack spacing='5'>
          <FormControl isRequired>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input id='name-testimonial' type='text' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input id='email-testimonial' type='email' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password-testimonial' type='password' />
            <FormHelperText color='fg.muted'>
              At least 8 characters long
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack spacing='6'>
          <Button variant='primary'>Create Account</Button>
          <HStack>
            <Divider />
            <Text textStyle='sm' whiteSpace='nowrap' color='fg.muted'>
              or sign up with
            </Text>
            <Divider />
          </HStack>
          <OAuthButtons />
        </Stack>
      </Stack>
    </Stack>
  </Container>
);
