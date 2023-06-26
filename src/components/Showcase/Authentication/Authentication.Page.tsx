import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import PageHeading from '../../Shared/PageHeading';
import authComponents from './Shared/_data';
import DisplayWindow from './Shared/DisplayWindow';

const AuthenticationPage: React.FC = () => {
  return (
    <Box>
      <PageHeading title='Authentication' />
      <Stack py='2rem' w='100dvw' alignItems='center'>
        <Stack maxW='1216px' w='100%' alignItems='center' px='.25rem'>
          {authComponents.map((item, i) => (
            <DisplayWindow
              key={i}
              name={item.name}
              component={item.component}
              hasDarkMode={item.hasDarkMode}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AuthenticationPage;
