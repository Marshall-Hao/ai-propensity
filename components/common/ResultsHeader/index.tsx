import { FC, ReactNode } from 'react';
import MotionDiv from '../MotionDiv';

type TProps = {
  left_results: ReactNode;
  right_results: ReactNode;
};

const ResultsHeader: FC<TProps> = ({ left_results, right_results }) => {
  return (
    <>
      {left_results}
      {right_results}
      <div className="flex divide-x-4 divide-dashed">
        <div className="h-[790px] w-1/2 bg-gblue-normal">
          <p className="mt-[90px] text-center text-3xl text-white">
            Most likely to convert
          </p>
          <div className="mx-auto mt-12 h-[500px] w-72"></div>
        </div>
        <div className="h-[790px] w-1/2 bg-gblue-dark">
          <p className="mt-[90px] text-center text-3xl text-white">
            Least likely to convert
          </p>
          <div className="mx-auto mt-12 h-[500px] w-72"></div>
        </div>
      </div>
    </>
  );
};

export default ResultsHeader;
