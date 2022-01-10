import React, { useCallback } from 'react';

import { ReactComponent as IconExchanges } from '../../../assets/exchanges.svg';
import { ReactComponent as IconGames } from '../../../assets/games.svg';
import { ReactComponent as IconMarketplaces } from '../../../assets/marketplaces.svg';
import { ReactComponent as IconDefi } from '../../../assets/defi.svg';
import { ReactComponent as IconCollectibles } from '../../../assets/collectibles.svg';
import { ReactComponent as IconUtilities } from '../../../assets/utilities.svg';
import { ReactComponent as IconChevronRight } from '../../../assets/chevron_right_secondary_small.svg';
import { CATEGORY_NAMES } from '../../../constants/categories';
import { ICategory } from '../../../services/CategoryService/types';

export interface IProps extends ICategory {
  onClick?: (id: string) => void;
}

const icons = {
  [CATEGORY_NAMES.exchanges]: <IconExchanges />,
  [CATEGORY_NAMES.games]: <IconGames />,
  [CATEGORY_NAMES.marketplaces]: <IconMarketplaces />,
  [CATEGORY_NAMES.defi]: <IconDefi />,
  [CATEGORY_NAMES.collectibles]: <IconCollectibles />,
  [CATEGORY_NAMES.utilities]: <IconUtilities />,
};

const colors = {
  [CATEGORY_NAMES.exchanges]: "bg-exchanges",
  [CATEGORY_NAMES.games]: "bg-games",
  [CATEGORY_NAMES.marketplaces]: "bg-marketplaces",
  [CATEGORY_NAMES.defi]: "bg-defi",
  [CATEGORY_NAMES.collectibles]: "bg-collectibles",
  [CATEGORY_NAMES.utilities]: "bg-utilities",
}

const CategoryCard: React.FC<IProps> = ({
  id,
  name,
  title,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick && onClick(id);
  }, [onClick, id]);

  const icon = icons[name] || <div className="h-[35px] w-[35px] rounded">{title?.slice(0, 1)?.toUpperCase()}</div>
  const bgColor = colors[name] || '';
  
  return (
    <div
      className={`flex flex-col rounded-md p-3 cursor-pointer ${bgColor}`}
      onClick={handleClick}
    >
      <div className="flex justify-start items-center w-full mb-4">
        {icon}
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="text-slate-500 text-sm font-medium">{title}</div>
        <div>
          <IconChevronRight />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
