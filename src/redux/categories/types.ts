import { ICategory } from '../../services/CategoryService/types';

export enum CategoriesActionTypes {
  LIST_RELOAD = '[Categories] list-reload',
  LIST_REFRESH = '[Categories] list-refresh',

  UI_MERGE = '[Categories] ui-merge',
}

export interface IUIPayload {
  loading?: boolean;
}

export interface CategoriesState {
  list: ICategory[];
  UI: IUIPayload;
}
