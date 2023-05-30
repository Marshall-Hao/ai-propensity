'use client';
import { Button, PageHeader, SvgIcon } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';

export default function Page() {
  return (
    <MotionMain>
      <PageHeader svg={<SvgIcon href="lipstick-copy"></SvgIcon>}>
        Thank you for visiting <br /> AI Propensity Model Simulator
      </PageHeader>

      <div className="mt-20">
        <p className="text-4xl text-gblue-normal">
          To learn more about AutoML and solutions available,
        </p>
      </div>

      <MotionDiv mode="left" delay={0.4}>
        <div className="mt-36">
          <div className="h-72 w-72 bg-gblue-normal"></div>
          <p className="mt-5 text-center text-3xl text-gblue-normal">Auto ML</p>
        </div>
      </MotionDiv>

      <MotionDiv mode="right" delay={0.4}>
        <div className="mt-[77px]">
          <div className="h-72 w-72 bg-gblue-normal"></div>
          <p className="mt-5 text-center text-3xl text-gblue-normal">Compass</p>
        </div>
      </MotionDiv>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/">
          <Button>Restart</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}