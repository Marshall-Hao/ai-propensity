import { FC } from 'react';
import clsx from 'clsx';

type TProps = {
  left: string;
  top: string;
};

const Square: FC<TProps> = ({ left = '', top = '' }) => {
  const actualClass = clsx(
    'absolute h-11 w-11 border-[5px] border-white bg-gblue-dark animate-pulse',
    left,
    top
  );

  return <div className={actualClass}></div>;
};

export default Square;
