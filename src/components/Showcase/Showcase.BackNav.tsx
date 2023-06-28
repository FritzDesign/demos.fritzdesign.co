import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BackNav: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      w={['6rem', '10rem']}
      pos='absolute'
      top={['16px', '16px', '32px']}
      right='8dvw'
      onClick={() => navigate('/')}
    >
      Go Back
    </Button>
  );
};

export default BackNav;
