import { FC, ReactNode } from 'react';

type TProps = {
  h1: ReactNode;
  h2: ReactNode;
};

const Card: FC<TProps> = ({ h1, h2, fill = '#174EA6' }) => {
  return (
    // eslint-disable-next-line react/jsx-no-duplicate-props
    <div className="mb-14 flex h-[426px] w-[930px] items-center justify-center rounded-3xl bg-gblue-normal">
      {/* <use fill={fill}></use> */}
      <div className="text-center">
        <h1 className="text-5xl">{h1}</h1>
        <h2 className="mt-5 text-4xl">{h2}</h2>
      </div>
    </div>
  );
};

export default Card;
