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
  grpIndex: number;
  setPreviewIndex: ({
    groupIndex,
    componentIndex
  }: {
    groupIndex: number;
    componentIndex: number;
  }) => void;
}

const VariationTabs: React.FC<Props> = ({ grpIndex, setPreviewIndex }) => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index: number) => {
    setSelected(index);
    setPreviewIndex({groupIndex: grpIndex, componentIndex: index});
  }

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
            color={selected === 0 ? 'whiteAlpha.900' : 'inherit'}
            bgColor={selected === 0 ? 'inherit' : 'gray.900'}
            transition='all .25s ease'
            borderRadius='8px 0px 0px 8px'
            onClick={() => handleSelect(0)}
          >
            Default
          </Tab>
          <Tab
            color={selected === 1 ? 'whiteAlpha.900' : 'inherit'}
            bgColor={selected === 1 ? 'inherit' : 'gray.900'}
            transition='all .25s ease'
            borderRadius='0px'
            onClick={() => handleSelect(1)}
          >
            Variation
          </Tab>
          <Tab
            color={selected === 2 ? 'whiteAlpha.900' : 'inherit'}
            bgColor={selected === 2 ? 'inherit' : 'gray.900'}
            transition='all .25s ease'
            borderRadius='0px 8px 8px 0px'
            onClick={() => handleSelect(2)}
          >
            Variation
          </Tab>
        </TabList>
      </Tabs>
    </Container>
  );
};

export default VariationTabs;
