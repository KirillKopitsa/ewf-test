import React, { useCallback } from 'react';

import { ICategory } from '../../services/CategoryService/types';
import { CategoryCard } from './CategoryCard';

export interface IProps {
  loading?: boolean;
  items: ICategory[];
  onSelect?: (id: string) => void;
}

const CategoryBoard: React.FC<IProps> = ({
  loading,
  items,
  onSelect,
}) => {
  const handleSelect = useCallback((id: string) => {
    onSelect && onSelect(id);
  }, [onSelect]);

  if (!!loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map(({ id, ...restProps }) => (
        <CategoryCard
          key={id}
          {...restProps}
          id={id}
          onClick={handleSelect}
        />
      ))}
    </div>
  );
}

export default CategoryBoard;
