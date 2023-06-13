export const items = [
  {
    id: 1,
    categoryName: 'Authentication',
    description: 'Login and Registration forms',
    handle: 'authentication',
    label: 'Go to authentication components'
  },
  {
    id: 2,
    categoryName: 'Lists',
    description: 'User events, activity feeds, and organization',
    handle: 'lists',
    label: 'Go to list components'
  },
  {
    id: 3,
    categoryName: 'Dashboards',
    description: 'A power-packed interface to view stats in one place',
    handle: 'dashboards',
    label: 'Go to dashboard components'
  },
  {
    id: 4,
    categoryName: 'Profiles',
    description: 'User & Admin Profiles, displaying information and settings',
    handle: 'profiles',
    label: 'Go to profile components'
  },
  {
    id: 5,
    categoryName: 'Products',
    description: 'Categories, galleries, checkout & more',
    handle: 'products',
    label: 'Go to product components'
  }
];

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;
export type CategoryItem = ElementType<typeof items>;

export default items;