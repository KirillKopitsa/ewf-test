import { ICategory } from './types';
import { mockedCategories } from '../../utils/mocks/categories';

class CategoryService {
  static async getCategories(): Promise<ICategory[]> {
    return Promise.resolve(mockedCategories);
  }
}

export default CategoryService;
export { CategoryService };
