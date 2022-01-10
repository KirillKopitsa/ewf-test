import { takeLatest, all, put, call } from 'redux-saga/effects';

import { CategoryService } from '../../services/CategoryService';

import { Action } from '../commonTypes';
import { CategoriesActionTypes } from '../categories/types';
import { EmptyObject } from '../../types/common.types';

import { categoriesActions } from './actions';
import { ICategory } from '../../services/CategoryService/types';

function* listReload(action: Action<CategoriesActionTypes.LIST_RELOAD, EmptyObject>): any {
	yield put(categoriesActions.uiMerge({ loading: true }));

  const list: ICategory[]= yield call(CategoryService.getCategories);
  if (!list) {
    yield put(categoriesActions.uiMerge({ loading: false }));
    return;
  }

  yield put(categoriesActions.listRefresh(list));
  yield put(categoriesActions.uiMerge({ loading: false }));
}

export default function* categoriesSaga() {
  yield all([
    takeLatest(CategoriesActionTypes.LIST_RELOAD, listReload),
  ]);
}
