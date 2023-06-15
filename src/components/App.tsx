import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import HomePage from './Home/Home.Page';
import ShowcasePage from './Showcase/Showcase.Page';
import { useEffect } from 'react';

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById('document')!.scrollTo(0, 0);
  }, [navigate]);

  return (
    <Box
      id='document'
      w='100%'
      h='100%'
      maxW='100dvw'
      maxH='100dvh'
      overflowX='hidden'
      overflowY='auto'
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
