import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Section = ({ children }: Props) => (
  <div className="flex flex-col w-full gap-4 p-4 border border-neutral-100">
    {children}
  </div>
);

export const Row = ({ children }: Props) => (
  <div className="flex items-center justify-between w-full">{children}</div>
);

export const Key = ({ children }: Props) => <p className="">{children}</p>;

export const Value = ({ children }: Props) => (
  <p className=" text-lime-300">{children}</p>
);

const Card = {
  Section,
  Row,
  Key,
  Value,
};

export default Card;
