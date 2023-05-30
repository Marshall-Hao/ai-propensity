import { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';
import useAIStore from '@/store';

type TProps = {
  h1: ReactNode;
  h2: ReactNode;
  bg: string;
  ml: string;
};

const Card: FC<TProps> = ({ h1, h2, bg = '', ml }) => {
  const selMl = useAIStore((state) => state.ml);

  const actualClass = clsx(
    'mb-14 flex h-[426px] w-[930px] items-center justify-center rounded-3xl transition duration-700 ease-in-out',
    bg,
    selMl === ml ? 'scale-110	' : 'scale-100'
  );

  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className={actualClass}>
      {/* <use fill={fill}></use> */}
      <div className="text-center">
        <h1 className="text-5xl">{h1}</h1>
        <h2 className="mt-5 text-4xl">{h2}</h2>
      </div>
    </div>
  );
};

export default Card;
