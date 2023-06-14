import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  description?: string;
}

const PageHeading: React.FC<Props> = ({ title, description = '' }) => {
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
            {title}
          </Heading>
          <Text color='whiteAlpha.700'>{description}</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default PageHeading;
