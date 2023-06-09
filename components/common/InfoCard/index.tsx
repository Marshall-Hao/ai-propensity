import { FC, ReactNode } from 'react';
import MotionDiv from '../MotionDiv';
import SvgIcon from '../SvgIcon';

type TProps = {
  children: ReactNode;
  svg: ReactNode;
  mode: 'up' | 'down' | 'left' | 'right';
  delay: number;
};

const InfoCard: FC<TProps> = ({ svg, children, mode, delay }) => {
  return (
    <>
      <MotionDiv mode={mode} delay={delay}>
        <div className="w-[500px] text-center">
          <SvgIcon href={svg}></SvgIcon>
          <p className="mt-5 text-[28px] leading-normal text-gblue-normal">
            {children}
          </p>
        </div>
      </MotionDiv>
    </>
  );
};

export default InfoCard;
