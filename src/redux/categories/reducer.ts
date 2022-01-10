import { CategoriesActions } from './actions';
import { CategoriesActionTypes, CategoriesState, IUIPayload } from './types';
import { ICategory } from '../../services/CategoryService/types';

const initState: CategoriesState = {
  list: [],
  UI: {
    loading: false,
  },
};

export function categoriesReducer(state: CategoriesState = initState, action: CategoriesActions): CategoriesState {
  switch (action.type) {
    case CategoriesActionTypes.LIST_REFRESH: {
      return {
        ...state,
        list: [...action.payload as ICategory[]],
      };
    }
    case CategoriesActionTypes.UI_MERGE: {
      return {
        ...state,
        UI: {
          ...state.UI,
          ...action.payload as IUIPayload,
        },
      };
    }
    default: {
      return state;
    }
  }
}
