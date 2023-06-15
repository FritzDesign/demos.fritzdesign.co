import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  track: {
    bg: 'gray.500',
    _checked: {
      bg: 'blue.300',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })