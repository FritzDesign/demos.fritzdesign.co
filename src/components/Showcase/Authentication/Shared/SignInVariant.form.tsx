import React from 'react'
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import Logo from './Logo'
import { FcGoogle } from 'react-icons/fc'

const SignInVariant: React.FC = (props: StackProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Stack spacing="8" {...props}>
      <Stack spacing="6">
        {isMobile && <Logo />}
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
          <HStack spacing="1" justify="center">
            <Text color="fg.muted">Don't have an account?</Text>
            <Button variant="text" size="lg">
              Sign up
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email-cta" placeholder="Enter your email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password-cta" placeholder="********" type="password" />
          </FormControl>
        </Stack>
        <HStack justify="space-between">
          <Checkbox defaultChecked>Remember me</Checkbox>
          <Button variant="text" size="sm">
            Forgot password
          </Button>
        </HStack>
        <Stack spacing="4">
          <Button variant="primary">Sign in</Button>
          <Button variant="secondary" leftIcon={<FcGoogle size="20" />} iconSpacing="3">
            Sign in with Google
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SignInVariant;