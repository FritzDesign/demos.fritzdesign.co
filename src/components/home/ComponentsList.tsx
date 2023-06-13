import React from 'react';
import { Stack } from '@chakra-ui/react';
import items from './ComponentsAnatomy/_items';
import ComponentListItem from './ComponentsAnatomy/ComponentListItem';

const ComponentsList: React.FC = () => {
  return (
    <Stack py='2rem'>
      {items.map((item) => {
        return (
          <ComponentListItem
            key={item.id}
            categoryName={item.categoryName}
            description={item.description}
            label={item.label}
            handle={item.handle}
          />
        );
      })}
    </Stack>
  );
};

export default ComponentsList;
