import { Box } from '@chakra-ui/react';
import React from 'react';
import Demos from './Demos';
import PageHeading from './PageHeading';
import ComponentsHeader from './ComponentsHeaders';
import ComponentsList from './ComponentsList';

const HomePage: React.FC = () => {
  return (
    <Box>
      <PageHeading />
      <Demos />
      <ComponentsHeader />
      <ComponentsList />
    </Box>
  );
};

export default HomePage;
