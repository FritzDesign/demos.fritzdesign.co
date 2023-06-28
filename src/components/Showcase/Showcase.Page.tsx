import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthenticationPage from './Authentication/Authentication.Page';
import PageHeading from '../Shared/PageHeading';
import BackNav from './Showcase.BackNav';

const ShowcasePage: React.FC = () => {
  const { handle } = useParams();

  if (handle === 'authentication') {
    return (
      <>
        <AuthenticationPage />
        <BackNav />
      </>
    );
  }

  return (
    <>
      <PageHeading
        title='404'
        description='The page you are looking for does not exist'
      />
      <BackNav />
    </>
  );
};

export default ShowcasePage;
