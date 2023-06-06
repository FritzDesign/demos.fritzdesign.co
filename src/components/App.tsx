import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box
      className='App'
      w='100dvw'
      h='100dvh'
      maxW='100dvw'
      maxH='100dvh'
      overflowX='hidden'
    >
      <Routes></Routes>
    </Box>
  );
};

export default App;
