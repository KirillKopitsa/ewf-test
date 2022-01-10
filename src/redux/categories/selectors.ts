import { createSelector } from 'reselect';
import { RootState } from '../store';

const list = (state: RootState) => state.Categories.list;
const UI = (state: RootState) => state.Categories.UI;

export const selectList = createSelector(
	[list],
	(data) => list,
);

export const selectUI = createSelector(
	[UI],
	(UI) => UI,
);
