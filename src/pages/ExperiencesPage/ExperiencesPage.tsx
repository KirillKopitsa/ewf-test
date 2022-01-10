import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { categoriesActions } from '../../redux/categories/actions';
import { selectList, selectUI } from '../../redux/categories/selectors';
import { CategoryBoard } from '../../components/CategoryBoard';

const ExperiencesPage: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectList);
  const { loading } = useSelector(selectUI);

  const handleSelect = useCallback((id: string) => {
    // TODO
  }, []);

  useEffect(() => {
    dispatch(categoriesActions.listReload());
  }, [dispatch]);

  return (
    <div className="p-5">
      <CategoryBoard
        loading={loading}
        items={categories}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default ExperiencesPage;
