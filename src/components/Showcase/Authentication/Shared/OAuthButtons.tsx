import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook, IoLogoGithub } from 'react-icons/io5';

const providers = [
  { name: 'Google', icon: <FcGoogle size='24' /> },
  { name: 'Facebook', icon: <IoLogoFacebook color='#3b5998' size='24' /> },
  { name: 'GitHub', icon: <IoLogoGithub color='black' size='24' /> }
];

const OAuthButtons = () => (
  <ButtonGroup variant='secondary' spacing='4' width='full'>
    {providers.map(({ name, icon }) => (
      <Button
        key={name}
        _hover={{ filter: 'brightness(.95)' }}
        _active={{ transform: 'scale(.98)' }}
        width='full'
        bgColor='whiteAlpha.900'
      >
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);

export default OAuthButtons;
