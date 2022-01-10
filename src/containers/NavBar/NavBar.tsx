import React from 'react';

import { ReactComponent as IconArrowLeft } from '../../assets/arrow_left.svg';
import { ReactComponent as IconHome } from '../../assets/home.svg';
import { ReactComponent as IconBell } from '../../assets/bell.svg';
import { ReactComponent as IconSettings } from '../../assets/settings.svg';

const NavBar: React.FC = () => {
  return (
    <nav
      className="
        h-full
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-2
        px-4
        bg-[#F5F5F5]
        border-b
        border-[#DFDFE0]
      "
    >
      <div className="flex justify-start items-center">
        <div className="flex justify-center items-center mr-4 cursor-pointer">
          <IconArrowLeft />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <IconHome />
        </div>
      </div>
      <div className="flex justify-start items-center">
        <div className="flex justify-center items-center mr-4 cursor-pointer">
          <IconBell />
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <IconSettings />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
