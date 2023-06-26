import React from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  useBreakpointValue
} from '@chakra-ui/react';
import Logo from '../Shared/Logo';
import SignInVariant from '../Shared/SignInVariant.form';
import { ComponentProps } from '../models/Props';

const LoginWithCTA: React.FC<ComponentProps> = ({ variant }) => {
  if (variant === 'variant1') {
    return <Flex minH={{ base: 'auto', md: '100vh' }}></Flex>;
  }

  if (variant === 'variant2') {
    return <Flex minH={{ base: 'auto', md: '100vh' }}></Flex>;
  }
  return (
    <Flex
      minH={{ base: 'auto', md: '100vh' }}
      bgGradient={{
        md: mode(
          'linear(to-r, blue.600 50%, white 50%)',
          'linear(to-r, blue.600 50%, gray.900 50%)'
        )
      }}
    >
      <Flex maxW='8xl' mx='auto' width='full' borderRadius='4px'>
        <Box flex='1' display={{ base: 'none', md: 'block' }}>
          <Flex
            direction='column'
            px={{ base: '4', md: '8' }}
            pt='2rem'
            height='full'
            color='fg.accent.default'
          >
            <Flex align='center'>
              <Logo width={128} />
            </Flex>
            <Flex flex='1' align='center'>
              <Stack spacing='8'>
                <Stack spacing='6'>
                  <Heading size={{ md: 'lg', xl: 'xl' }}>Welcome Back</Heading>
                  <Text textStyle='lg' maxW='md' fontWeight='medium'>
                    Login to continue pursuing your dreams.
                  </Text>
                </Stack>
                <HStack spacing='4'>
                  <AvatarGroup
                    size='md'
                    max={useBreakpointValue({ base: 2, lg: 5 })}
                    borderColor='fg.accent.default'
                  >
                    <Avatar
                      name='Ryan Florence'
                      src='https://bit.ly/ryan-florence'
                    />
                    <Avatar
                      name='Segun Adebayo'
                      src='https://bit.ly/sage-adebayo'
                    />
                    <Avatar
                      name='Kent Dodds'
                      src='https://bit.ly/kent-c-dodds'
                    />
                    <Avatar
                      name='Prosper Otemuyiwa'
                      src='https://bit.ly/prosper-baba'
                    />
                    <Avatar
                      name='Christian Nwamba'
                      src='https://bit.ly/code-beast'
                    />
                  </AvatarGroup>
                  <Text fontWeight='medium'>Join 10.000+ users</Text>
                </HStack>
              </Stack>
            </Flex>
          </Flex>
        </Box>
        <Center flex='1'>
          <SignInVariant
            //@ts-ignore
            px={{ base: '4', md: '8' }}
            py={{ base: '12', md: '48' }}
            width='full'
            maxW='md'
          />
        </Center>
      </Flex>
    </Flex>
  );
};

export default LoginWithCTA;
