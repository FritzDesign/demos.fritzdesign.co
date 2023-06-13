import { Box, Button, Container, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface ListItemProps {
  categoryName: string;
  description: string;
  label: string;
  handle: string;
}

const ComponentListItem: React.FC<ListItemProps> = ({
  categoryName,
  description,
  label,
  handle
}) => {
  const navigate = useNavigate();

  return (
    <Box
      as='section'
      color='white'
      pt={{ base: '4', md: '4' }}
      pb={{ base: '4', md: '4' }}
    >
      <Container>
        <Box
          bg='gray.700'
          px={{ base: '4', md: '6' }}
          py='5'
          boxShadow='sm'
          borderRadius='lg'
        >
          <Stack
            spacing='4'
            direction={{ base: 'column', sm: 'row' }}
            justify='space-between'
          >
            <Stack spacing='1'>
              <Text fontSize='lg' fontWeight='medium'>
                {categoryName}
              </Text>
              <Text color='whiteAlpha.700' fontSize='sm'>
                {description}
              </Text>
            </Stack>
            <Button
              variant='primary'
              _active={{ transform: 'scale(.95)' }}
              _hover={{ filter: 'brightness(1.1)' }}
              w={['100%', '8rem']}
              bgColor='blue.400'
              alignSelf='center'
              aria-label={label}
              onClick={() => navigate(`/components/${handle}`)}
            >
              View
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ComponentListItem;
