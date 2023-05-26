import { FC, ReactNode } from 'react';
import BluePingDiv from '../BluePingDiv';

type TProps = {
  children: ReactNode;
  svg: ReactNode;
};

const PageHeader: FC<TProps> = ({ svg, children }) => {
  return (
    <>
      <div className="mt-36">
        <BluePingDiv>{svg}</BluePingDiv>
      </div>
      <div className="mt-16 text-center">
        <h1 className="mx-auto max-w-[812px] text-[50px] leading-tight text-gblue-normal">
          {children}
        </h1>
      </div>
    </>
  );
};

export default PageHeader;
