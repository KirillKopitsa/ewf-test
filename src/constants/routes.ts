import { RouteParamPlaceholder } from '../enums/params';

export const UI_ROUTES = {
  experiences: `/experiences`,
  experiencesAllCategories: `/experiences/categories`,
  experiencesCategory: `/experiences/category/${RouteParamPlaceholder.CategoryID}`,
  experiencesPopular: `/experiences/popular`,
  experiencesRecent: `/experiences/recent`,
};
