import { FC, ReactNode } from 'react';
import MotionDiv from '../MotionDiv';
import Button from '../Button';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeCircleOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import Link from 'next/link';
import useAIStore from '@/store';

type TProps = {
  percentage: number;
  p: string;
  button_text: string;
  button_link: string;
  cross_svg: ReactNode;
};

const WhiteCard: FC<TProps> = ({
  percentage,
  p,
  button_text,
  button_link,
  cross_svg,
}) => {
  const tryAgain = useAIStore((state) => state.tryAgain);

  return (
    <div className="h-[1180px] w-screen -translate-y-[40px] rounded-t-[48px] bg-white">
      <p className="pt-6 text-center text-3xl text-grey">
        Results are for illustrative purpose only
      </p>
      <div className="mx-auto mb-[107px] mt-14 h-64 w-64">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={percentage}
          duration={1.4}
          easingFunction={easeCircleOut}>
          {(value: number) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                styles={buildStyles({
                  pathTransition: 'none',
                  textColor: 'black',
                  pathColor: '#174EA6',
                })}
              />
            );
          }}
        </AnimatedProgressProvider>
      </div>
      <MotionDiv mode="up" delay={0.4} classNames="flex justify-center">
        <div>
          <div className="mx-auto w-[740px]">
            <p className="mb-12 text-center text-4xl leading-tight text-gblue-dark">
              Your propensity model had an accuracy of <span className="font-bold">{percentage}%</span>
            </p>
            <p className="mb-[149px] text-center text-4xl leading-tight text-gblue-dark">
              {p}
            </p>
          </div>
          <div className="flex justify-center">
            <div onClick={tryAgain}>
              <Link href={button_link}>
                <Button>{button_text}</Button>
              </Link>
              <Link href="/pages/last">
                <div className="mx-auto w-11">{cross_svg}</div>
              </Link>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default WhiteCard;
