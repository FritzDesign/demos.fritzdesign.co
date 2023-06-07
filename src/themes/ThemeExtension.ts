import { theme as proTheme } from '@chakra-ui/pro-theme';
import { extendTheme, theme as baseTheme } from '@chakra-ui/react';
import '@fontsource/inter';

const theme = extendTheme(
  {
    components: {},
    colors: {
      ...baseTheme.colors,
      brand: baseTheme.colors.blue
    }
    // fonts: {
    //   heading: 'Marcellus',
    //   body: 'Poppins',
    //   alt: 'Inter'
    // }
  },
  proTheme
);

export default theme;
