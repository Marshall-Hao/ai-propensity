import { FC, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

const PingDiv: FC<TProps> = ({ children }) => {
  return (
    <div className="relative h-48 w-48 rounded-full border-8 border-white px-9 py-8">
      {children}
      <div className="absolute left-[-6px] top-[-6px] h-48 w-48 animate-ping rounded-full border-8 border-white"></div>
    </div>
  );
};

export default PingDiv;
