import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { Rating } from '../Shared/Rating';
import { SignUpVariant } from '../Shared/SignupVariant.form';
import React from 'react';
import { ComponentProps } from '../models/Props';

const SignupWithTestimonial: React.FC<ComponentProps> = ({ variant }) => {
  if (variant === 'variant1') {
    return <Box py={{ base: '12', md: '24' }} maxW='7xl' mx='auto'></Box>;
  }

  if (variant === 'variant2') {
    return <Box py={{ base: '12', md: '24' }} maxW='7xl' mx='auto'></Box>;
  }
  return (
    <Box py={{ base: '12', md: '24' }} maxW='7xl' mx='auto'>
      <Stack direction='row' spacing='12'>
        <Flex flex='1'>
          <SignUpVariant />
        </Flex>
        <Center
          flex='1'
          px={{ lg: '8' }}
          display={{ base: 'none', lg: 'flex' }}
        >
          <VStack spacing='8'>
            <Stack direction='row' spacing='3'>
              <Icon as={ImQuotesLeft} boxSize='8' mt='-4' />
              <Heading size='sm' fontWeight='medium' textAlign='center'>
                What can I say - I fell in love with Fritz Design Co.
              </Heading>
              <Icon as={ImQuotesRight} boxSize='8' alignSelf='end' />
            </Stack>
            <VStack spacing='4'>
              <Avatar
                size='lg'
                src='https://avatars.githubusercontent.com/u/110115371?v=4'
                name='C.J. Fritz'
              />
              <Stack textAlign='center' spacing='1'>
                <Text textStyle='md' fontWeight='medium' color='fg.muted'>
                  C.J. Fritz
                </Text>
                <Text fontWeight='medium' textStyle='sm' color='fg.muted'>
                  cj@fritzdesign.co
                </Text>
              </Stack>
              <Rating defaultValue={5} />
            </VStack>
          </VStack>
        </Center>
      </Stack>
    </Box>
  );
};

export default SignupWithTestimonial;
