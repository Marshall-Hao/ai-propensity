import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type TProps = {
  h1: ReactNode;
  h2: ReactNode;
  bg: string;
};

const Card: FC<TProps> = ({ h1, h2, bg = '' }) => {
  const actualClass = clsx(
    'mb-14 flex h-[426px] w-[930px] items-center justify-center rounded-3xl',
    bg
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
