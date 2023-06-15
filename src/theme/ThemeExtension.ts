import { theme as proTheme } from '@chakra-ui/pro-theme';
import { extendTheme, theme as baseTheme, type ThemeConfig } from '@chakra-ui/react';
import '@fontsource/inter';
import {switchTheme} from './ThemeOverrides';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}
const theme = extendTheme(
  {
    config,
    components: {
      Switch: switchTheme
    },
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
