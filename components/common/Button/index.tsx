import { FC, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: FC<TProps> = ({
  children,
  disabled = false,
  onClick = () => undefined,
}) => {
  return (
    <button
      className="flex h-[89px] w-[516px] items-center justify-center  rounded-full bg-gblue-normal  transition-colors	 disabled:bg-gblue-dark"
      disabled={disabled}
      onClick={onClick}>
      <p className="animate-pulse text-4xl text-white">{children}</p>
    </button>
  );
};

export default Button;
