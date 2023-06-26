import {
  Container,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
  variant: string;
  setVariant: (variant: string) => void;
}

const VariationTabs: React.FC<Props> = ({ variant, setVariant }) => {
  const handleSelect = (variant: string) => {
    setVariant(variant);
  };

  return (
    <Container px='0'>
      <Tabs variant='unstyled'>
        <TabList
          w='fit-content'
          bg='gray.700'
          borderBottom='none'
          borderRadius='8px'
          color='whiteAlpha.700'
          p='1px'
        >
          <Tab
            color={variant === 'default' ? 'whiteAlpha.900' : 'inherit'}
            bgColor={variant === 'default' ? 'inherit' : 'gray.900'}
            transition='all .25s ease'
            borderRadius='8px 0px 0px 8px'
            onClick={() => handleSelect('default')}
          >
            Default
          </Tab>
          <Tab
            color={variant === 'variant1' ? 'whiteAlpha.900' : 'inherit'}
            bgColor={variant === 'variant1' ? 'inherit' : 'gray.900'}
            transition='all .25s ease'
            borderRadius='0px'
            onClick={() => handleSelect('variant1')}
          >
            Variation
          </Tab>
          <Tab
            color={variant === 'variant2' ? 'whiteAlpha.900' : 'inherit'}
            bgColor={variant === 'variant2' ? 'inherit' : 'gray.900'}
            transition='all .25s ease'
            borderRadius='0px 8px 8px 0px'
            onClick={() => handleSelect('variant2')}
          >
            Variation
          </Tab>
        </TabList>
      </Tabs>
    </Container>
  );
};

export default VariationTabs;
