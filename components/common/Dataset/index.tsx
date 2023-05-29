import { FC, ReactNode } from 'react';
import MotionDiv from '../MotionDiv';

type TProps = {
  children: ReactNode;
  svg: ReactNode;
  col: string;
  mode: 'up' | 'down' | 'left' | 'right';
  delay: number;
  floatAnimtion: 'animate-float' | 'animate-float-delay';
};

const Dataset: FC<TProps> = ({
  children,
  svg,
  col,
  mode,
  delay,
  floatAnimtion = 'animate-float',
}) => {
  return (
    <div className={col}>
      <MotionDiv mode={mode} delay={delay}>
        <div className={`w-[20.5rem]  ${floatAnimtion}`}>
          <div className="flex justify-center">
            <div className="relative h-[170px] w-[170px] rounded-full border-[6px] border-gblue-normal p-10 shadow-xl">
              {svg}
            </div>
          </div>
          <p className="mt-7 text-center text-4xl text-gblue-normal">
            {children}
          </p>
        </div>
      </MotionDiv>
    </div>
  );
};

export default Dataset;
