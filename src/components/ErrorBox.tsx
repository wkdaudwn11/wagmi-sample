import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ErrorBox = ({ children }: Props) => (
  <div className="flex flex-col gap-2 text-red-500 text-xs">{children}</div>
);

export default ErrorBox;
