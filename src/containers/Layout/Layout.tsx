import React from 'react';

import { NavBar } from '../NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <div className="fixed top-0 w-full h-16">
        <NavBar />
      </div>
      <div className="overflow-auto pt-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
