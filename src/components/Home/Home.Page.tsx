import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Demos from './Demos';
import PageHeading from '../Shared/PageHeading';
import ComponentsHeader from './ComponentsHeaders';
import ComponentsList from './ComponentsList';

const HomePage: React.FC = () => {
  const [searchedComponents, setSearchedComponents] = useState<any[] | null>(
    null
  );
  return (
    <Box>
      <PageHeading
        title='Demos'
        description='Experience bite-sized, interactive concept websites designed to
            engage and captivate users'
      />
      <Demos />
      <ComponentsHeader setSearchedComponents={setSearchedComponents} />
      <ComponentsList searchedComponents={searchedComponents} />
    </Box>
  );
};

export default HomePage;
