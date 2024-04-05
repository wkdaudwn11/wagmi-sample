import React from 'react';

import Spinner from '@/components/Spinner';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

const Button = ({ children, disabled, isLoading, onClick }: Props) => (
  <button
    className="w-full h-12 border bg-slate-950 disabled:bg-slate-900 disabled:cursor-not-allowed"
    type="button"
    disabled={disabled || isLoading}
    onClick={onClick}
  >
    <div className="flex items-center justify-center gap-4">
      {children}
      {isLoading && <Spinner />}
    </div>
  </button>
);

export default Button;
