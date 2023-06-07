import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const PageHeading: React.FC = () => {
  return (
    <Box
      as='section'
      bg='gray.800'
      color='whiteAlpha.900'
      pt={{ base: '4', md: '8' }}
      pb={{ base: '12', md: '24' }}
    >
      <Container>
        <Stack spacing='1'>
          <Heading size={{ base: 'xs', md: 'sm' }} fontWeight='medium'>
            Demos
          </Heading>
          <Text color='whiteAlpha.700'>
            Experience bite-sized, interactive concept websites designed to
            engage and captivate users
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default PageHeading;
