import { ICategory } from '../../services/CategoryService/types';
import { CATEGORY_NAMES } from '../../constants/categories';

export const mockedCategories: ICategory[] = [
  {
    id: 'category-1',
    name: CATEGORY_NAMES.exchanges,
    title: 'Exchanges',
  },
  {
    id: 'category-2',
    name: CATEGORY_NAMES.games,
    title: 'Games',
  },
  {
    id: 'category-3',
    name: CATEGORY_NAMES.marketplaces,
    title: 'Marketplaces',
  },
  {
    id: 'category-4',
    name: CATEGORY_NAMES.defi,
    title: 'Defi',
  },
  {
    id: 'category-5',
    name: CATEGORY_NAMES.collectibles,
    title: 'Collectibles',
  },
  {
    id: 'category-6',
    name: CATEGORY_NAMES.utilities,
    title: 'Utilities',
  },
];
