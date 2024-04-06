import React from 'react';

import Spinner from '@/components/Spinner';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

const Button = ({ children, disabled, isError, isLoading, onClick }: Props) => (
  <button
    className={`w-full h-12 bg-slate-950 disabled:opacity-60 rounded-lg disabled:cursor-not-allowed ${isError ? 'border border-red-500' : ''}`}
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
