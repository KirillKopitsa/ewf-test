import { ActionUnion, createAction } from '../commonTypes';
import { CategoriesActionTypes, IUIPayload } from './types';
import { EmptyObject } from '../../types/common.types';
import { ICategory } from '../../services/CategoryService/types';

export const categoriesActions = {
  listReload: (): { type: CategoriesActionTypes, payload: EmptyObject } => createAction(
    CategoriesActionTypes.LIST_RELOAD,
  ),
  listRefresh: (payload: ICategory[]): { type: CategoriesActionTypes, payload: ICategory[] } => createAction(
    CategoriesActionTypes.LIST_REFRESH,
    payload,
  ),
  uiMerge: (payload: IUIPayload): { type: CategoriesActionTypes, payload: IUIPayload } => createAction(
    CategoriesActionTypes.UI_MERGE,
    payload,
  ),
}

export type CategoriesActions = ActionUnion<typeof categoriesActions>;
