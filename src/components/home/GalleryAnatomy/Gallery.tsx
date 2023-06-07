import {
  AspectRatio,
  Box,
  Circle,
  HStack,
  Heading,
  IconButton,
  IconButtonProps,
  Image,
  Skeleton,
  Stack,
  StackProps,
  useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { Carousel, CarouselSlide, useCarousel } from './Carousel';
import { Product } from './_images';

interface GalleryProps {
  products: Product[];
  aspectRatio?: number;
  rootProps?: StackProps;
}

export const Gallery = (props: GalleryProps) => {
  const { products, aspectRatio = 5.18 / 3, rootProps } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const [ref, slider] = useCarousel({
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel)
  });

  const hasPrevious = currentSlide !== 0;
  const hasNext = currentSlide < products.length - 1;

  return (
    <Stack
      _active={{ cursor: 'grabbing' }}
      cursor='pointer'
      spacing='4'
      {...rootProps}
    >
      <Box
        position='relative'
        sx={{
          _hover: {
            '> button': {
              display: 'inline-flex'
            }
          }
        }}
      >
        <Carousel ref={ref}>
          {products.map((product, i) => (
            <CarouselSlide       borderRadius='4px' pos='relative' key={i}>
              <Box
                pos='absolute'
                top='0'
                left='0'
                h='100%'
                w='100%'
                bg='linear-gradient(to bottom, rgba(0,0,0,0) 66%, rgba(0,0,0,0.65) 100%)'
                zIndex={4}
                pointerEvents='none'
              />
              <AspectRatio
                ratio={aspectRatio}
                transition='all 200ms'
                opacity={currentSlide === i ? 1 : 0.4}
                _hover={{ opacity: 1 }}
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  fallback={<Skeleton />}
                  onClick={() => window.open(product.href, '_blank')}
                />
              </AspectRatio>
              <Heading
                pos='absolute'
                bottom='1.5rem'
                left='1.5rem'
                zIndex={5}
                color='white'
              >
                {product.name}
              </Heading>
            </CarouselSlide>
          ))}
        </Carousel>
        {hasPrevious && (
          <CarouselIconButton
            pos='absolute'
            left='3'
            top='50%'
            transform='translateY(-50%)'
            onClick={() => slider.current?.prev()}
            icon={<IoChevronBackOutline />}
            aria-label='Previous Slide'
          />
        )}

        {hasNext && (
          <CarouselIconButton
            pos='absolute'
            right='3'
            top='50%'
            transform='translateY(-50%)'
            onClick={() => slider.current?.next()}
            icon={<IoChevronForwardOutline />}
            aria-label='Next Slide'
          />
        )}
        <HStack
          position='absolute'
          width='full'
          justify='center'
          bottom='0'
          py='4'
        >
          {products.map((_, index) => (
            <Circle
              key={index}
              size='2'
              bg={currentSlide === index ? 'white' : 'whiteAlpha.400'}
            />
          ))}
        </HStack>
      </Box>
    </Stack>
  );
};

const CarouselIconButton = (props: IconButtonProps) => (
  <IconButton
    display='none'
    fontSize='lg'
    isRound
    boxShadow='base'
    bg={useColorModeValue('gray.900', 'gray.800')}
    _hover={{
      bg: useColorModeValue('gray.700', 'gray.700')
    }}
    _active={{
      bg: useColorModeValue('gray.600', 'gray.600')
    }}
    _focus={{ boxShadow: 'inherit' }}
    _focusVisible={{ boxShadow: 'outline' }}
    {...props}
  />
);
