import { FC, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

const Button: FC<TProps> = ({ children }) => {
  return (
    <div className="bottom[9%] absolute left-[26%] right-[26%] top-[86%] flex h-[89px] w-[516px] items-center justify-center rounded-full bg-gblue-normal">
      <p className="animate-pulse text-4xl">{children}</p>
    </div>
  );
};

export default Button;
