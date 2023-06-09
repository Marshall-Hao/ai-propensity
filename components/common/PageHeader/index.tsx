import { FC, ReactNode } from 'react';
import BluePingDiv from '../BluePingDiv';
import MotionDiv from '../MotionDiv';
import clsx from 'clsx';

type TProps = {
  children: ReactNode;
  svg: ReactNode;
  text: string;
};

const PageHeader: FC<TProps> = ({ svg, text, children }) => {
  const textClass = clsx(
    'mx-auto max-w-[863px] leading-tight text-gblue-normal',
    text
  );

  return (
    <>
      <MotionDiv mode="down" delay={0.2} classNames="mx-auto mt-36">
        <BluePingDiv>{svg}</BluePingDiv>
      </MotionDiv>
      <MotionDiv mode="up" delay={0.3} classNames="mt-16 text-center">
        <h1 className={textClass}>{children}</h1>
      </MotionDiv>
    </>
  );
};

export default PageHeader;
