import { FC, ReactNode, useState } from 'react';
import MotionDiv from '../MotionDiv';
import SvgIcon from '../SvgIcon';
import useAIStore from '@/store';

type TProps = {
  children: ReactNode;
  svg: string;
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
  const [active, setActive] = useState(false);
  const increaseData = useAIStore((state) => state.increaseData);
  const decreaseData = useAIStore((state) => state.decreaseData);

  const handleClick = () => {
    setActive((prev) => {
      if (!prev) {
        increaseData();
      } else {
        decreaseData();
      }
      return !prev;
    });
  };

  const classChoices =
    'shadow-xl relative h-[170px] w-[170px] rounded-full border-[6px] p-10 transition duration-500';

  return (
    <div className={col}>
      <MotionDiv mode={mode} delay={delay}>
        <div className={`w-[20.5rem]  ${floatAnimtion}`}>
          <div className="flex justify-center">
            <div
              className={`${classChoices} ${
                active
                  ? 'border-gblue-normal bg-gblue-normal'
                  : 'border-gblue-normal'
              }`}
              onClick={handleClick}>
              {active ? (
                <SvgIcon href={svg} fill="#ffffff"></SvgIcon>
              ) : (
                <SvgIcon href={svg} fill="#4285F4"></SvgIcon>
              )}
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
