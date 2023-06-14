import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import PageHeading from '../../Shared/PageHeading';
import SimpleLogin from './Components/BasicLogin';
import authComponents from './Shared/_data';
import DisplayWindow from './Shared/DisplayWindow';

const AuthenticationPage: React.FC = () => {
  return (
    <Box>
      <PageHeading title='Authentication' />
      <Stack py='2rem' w='100dvw' alignItems='center'>
        <Stack maxW='1216px' w='100%' alignItems='center'>
          {authComponents.map((item) => (
            <DisplayWindow name={item.name} component={item.component} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AuthenticationPage;
