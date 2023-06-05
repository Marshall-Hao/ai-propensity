import { FC } from 'react';
import clsx from 'clsx';
import MotionDiv from '../MotionDiv';

type TProps = {
  startLeft: number;
  startTop: number;
  endLeft: number;
  endTop: number;
};

const Square: FC<TProps> = ({
  startLeft = 0,
  startTop = 0,
  endLeft = 0,
  endTop = 0,
}) => {
  const actualClass = clsx(
    'absolute h-11 w-11 border-[5px] border-white bg-gblue-dark animate-pulse'
  );

  return (
    <MotionDiv
      delay={0.2}
      duration={1.4}
      classNames={actualClass}
      startLeft={startLeft}
      startTop={startTop}
      endLeft={endLeft}
      endTop={endTop}></MotionDiv>
  );
};

export default Square;
