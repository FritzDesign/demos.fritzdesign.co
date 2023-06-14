import React, { useEffect, useState } from 'react';
import { Stack } from '@chakra-ui/react';
import items from './ComponentsAnatomy/_items';
import ComponentListItem from './ComponentsAnatomy/ComponentListItem';

interface Props {
  searchedComponents: null | any[];
}

const ComponentsList: React.FC<Props> = ({ searchedComponents }) => {
  const [minHeight, setMinHeight] = useState<string>();

  useEffect(() => {
    const wrapper = document.getElementById(
      'component-wrapper'
    )! as HTMLDivElement;
    setMinHeight(`${wrapper.clientHeight}px`);
  }, []);

  return (
    <Stack id='component-wrapper' py='2rem' minHeight={minHeight}>
      {searchedComponents
        ? searchedComponents.map((item) => {
            return (
              <ComponentListItem
                key={item.id}
                categoryName={item.categoryName}
                description={item.description}
                label={item.label}
                handle={item.handle}
              />
            );
          })
        : items.map((item) => {
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
