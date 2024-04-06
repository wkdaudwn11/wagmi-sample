import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="flex flex-col items-center justify-center w-[640px]">
    {children}
  </div>
);

export default Layout;
