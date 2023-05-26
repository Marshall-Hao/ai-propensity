import { FC, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  svg: ReactNode;
  col: string;
};

const Dataset: FC<TProps> = ({ children, svg, col }) => {
  return (
    <div className={col}>
      <div className="w-[20.5rem]">
        <div className="flex justify-center">
          <div className="relative h-[170px] w-[170px] rounded-full border-[6px] border-gblue-normal p-10 shadow-xl">
            {svg}
          </div>
        </div>
        <p className="mt-7 text-center text-4xl text-gblue-normal">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Dataset;
