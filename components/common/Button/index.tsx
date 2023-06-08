import { FC, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

const Button: FC<TProps> = ({ children }) => {
  return (
    <div className="flex h-[89px] w-[516px] items-center justify-center  rounded-full bg-gblue-normal">
      <p className="animate-pulse text-4xl text-white">{children}</p>
    </div>
  );
};

export default Button;
