import placeholder from '../../../assets/Demos/demo-ph.webp';
import ecommerce from '../../../assets/Demos/AstraConcept.webp';

export const products = [
  {
    id: '1',
    name: 'E-commerce',
    currency: 'USD',
    price: 199,
    flag: 'new',
    src: ecommerce,
    alt: 'E-commerce Concept Photo',
    rating: 4,
    ratingCount: 1,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    href: 'https://astra-skincare.com'
  },
  {
    id: '2',
    name: 'Demo 2',
    currency: 'USD',
    price: 199,
    salePrice: 179.99,
    flag: 'on-sale',
    src: placeholder,
    alt: 'Awesome watch',
    rating: 4,
    ratingCount: 12,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    href: 'https://astra-skincare.com'
  },
  {
    id: '3',
    name: 'Demo 3',
    currency: 'USD',
    price: 199,
    src: placeholder,
    alt: 'Awesome watch',
    rating: 4,
    ratingCount: 12,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    href: 'https://astra-skincare.com'
  },
  {
    id: '4',
    name: 'Demo 4',
    currency: 'GBP',
    price: 199,
    src: placeholder,
    alt: 'Awesome watch',
    rating: 5,
    ratingCount: 1,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    href: 'https://astra-skincare.com'
  }
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
