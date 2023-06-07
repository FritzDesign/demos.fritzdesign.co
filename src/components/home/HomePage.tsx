import { Box } from '@chakra-ui/react';
import React from 'react';
import HeadingWithSearch from './HeadingWithSearch';
import Demos from './Demos';
import PageHeading from './PageHeading';

const HomePage: React.FC = () => {
  return (
    <Box>
      <PageHeading />
      <Demos />
      <HeadingWithSearch />
    </Box>
  );
};

export default HomePage;
