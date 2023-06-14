import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Demos from './Demos';
import PageHeading from './PageHeading';
import ComponentsHeader from './ComponentsHeaders';
import ComponentsList from './ComponentsList';

const HomePage: React.FC = () => {
  const [searchedComponents, setSearchedComponents] = useState<any[] | null>(
    null
  );
  return (
    <Box>
      <PageHeading />
      <Demos />
      <ComponentsHeader setSearchedComponents={setSearchedComponents} />
      <ComponentsList searchedComponents={searchedComponents} />
    </Box>
  );
};

export default HomePage;
