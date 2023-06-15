import React, { useState } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import PageHeading from '../../Shared/PageHeading';
import authComponents from './Shared/_data';
import DisplayWindow from './Shared/DisplayWindow';

const AuthenticationPage: React.FC = () => {
  const [previewIndex, setPreviewIndex] = useState({
    groupIndex: 0,
    componentIndex: 0
  });
  return (
    <Box>
      <PageHeading title='Authentication' />
      <Stack py='2rem' w='100dvw' alignItems='center'>
        <Stack maxW='1216px' w='100%' alignItems='center'>
          {authComponents.map((item, i) => (
            <DisplayWindow
              key={i}
              name={item.name}
              component={
                i === previewIndex.groupIndex
                  ? item.components[previewIndex.componentIndex]
                  : item.components[0]
              }
              hasDarkMode={item.hasDarkMode}
              grpIndex={i}
              setPreviewIndex={setPreviewIndex}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AuthenticationPage;
