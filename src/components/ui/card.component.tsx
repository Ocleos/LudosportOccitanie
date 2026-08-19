import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '', id }) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-lg border border-gray-500 bg-slate-900/70 p-4 shadow-lg ${className}`}
      id={id}>
      {children}
    </div>
  );
};

export default Card;
