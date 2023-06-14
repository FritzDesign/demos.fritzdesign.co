import React from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import AuthenticationPage from './Authentication/Authentication.Page';
import PageHeading from '../Shared/PageHeading';

const ShowcasePage: React.FC = () => {
  const { handle } = useParams();
  console.log(handle);
  if (handle === 'authentication') {
    return <AuthenticationPage />;
  } else {
    return <PageHeading title='404' description='The page you are looking for does not exist' />
  }
};

export default ShowcasePage;
