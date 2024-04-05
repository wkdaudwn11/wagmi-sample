'use client';

import React from 'react';

type Props = {
  size?: number;
};

const initClassName =
  'border-t-transparent border-solid animate-spin rounded-full border border-2';

const Spinner = ({ size = 4 }: Props) => (
  <div className={`${initClassName} w-${size} h-${size}`} />
);

export default Spinner;
