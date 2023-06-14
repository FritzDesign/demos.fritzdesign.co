import {
  Box,
  Container,
  Divider,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import items from './ComponentsAnatomy/_items';

interface Props {
  setSearchedComponents: (components: null | any[]) => void;
}
//@ts-ignore
const ComponentsHeader: React.FC<Props> = ({ setSearchedComponents }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchTerm === '') {
        return setSearchedComponents(null);
      }
      //@ts-ignore
      const result = items.filter((item) => {
        if (
          item.searchTerms.filter((term) => {
            return term.includes(searchTerm);
          }).length
        ) {
          return item;
        }
      });
      setSearchedComponents(result);
    }, 750);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <Box
      as='section'
      bg='gray.800'
      color='whiteAlpha.900'
      pt={{ base: '4', md: '8' }}
      pb={{ base: '12', md: '24' }}
    >
      <Container>
        <Stack spacing='5'>
          <Stack
            spacing='4'
            direction={{ base: 'column', md: 'row' }}
            justify='space-between'
          >
            <Box>
              <Text fontSize='lg' fontWeight='medium'>
                Components
              </Text>
              <Text color='whiteAlpha.700' fontSize='sm'>
                Unlimited possibilities with our extensive inventory of
                customizable components for every website's needs
              </Text>
            </Box>
            <InputGroup maxW={{ sm: 'xs' }}>
              <InputLeftElement pointerEvents='none'>
                <Icon as={FiSearch} color='fg.muted' boxSize='5' />
              </InputLeftElement>
              <Input
                placeholder='Search'
                bg='gray.900'
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              />
            </InputGroup>
          </Stack>
          <Divider />
        </Stack>
      </Container>
    </Box>
  );
};

export default ComponentsHeader;
