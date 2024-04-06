import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Section = ({ children }: Props) => (
  <div className="overflow-hidden flex flex-col w-full gap-4 p-6 rounded-lg bg-gray-900">
    {children}
  </div>
);

export const Title = ({ children }: Props) => (
  <div className="flex items-center justify-center">
    <h1 className="font-bold text-2xl">{children}</h1>
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
  Title,
  Row,
  Key,
  Value,
};

export default Card;
