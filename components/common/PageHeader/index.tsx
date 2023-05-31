import { FC, ReactNode } from 'react';
import BluePingDiv from '../BluePingDiv';
import MotionDiv from '../MotionDiv';

type TProps = {
  children: ReactNode;
  svg: ReactNode;
};

const PageHeader: FC<TProps> = ({ svg, children }) => {
  return (
    <>
      <MotionDiv mode="down" delay={0.2} classNames="mx-auto mt-36">
        <BluePingDiv>{svg}</BluePingDiv>
      </MotionDiv>
      <MotionDiv mode="up" delay={0.3} classNames="mt-16 text-center">
        <h1 className="mx-auto max-w-[863px] text-[50px] leading-tight text-gblue-normal">
          {children}
        </h1>
      </MotionDiv>
    </>
  );
};

export default PageHeader;
