import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import HomePage from './Home/Home.Page';
import ShowcasePage from './Showcase/Showcase.Page';

const App: React.FC = () => {
  return (
    <Box
      w='100dvw'
      h='100dvh'
      maxW='100dvw'
      maxH='100dvh'
      overflowX='hidden'
      bgColor='gray.900'
    >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/components/:handle' element={<ShowcasePage />} />
      </Routes>
    </Box>
  );
};

export default App;
