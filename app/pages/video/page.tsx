'use client';
import { SvgIcon, BluePingDiv, Button } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';

export default function Page() {
  return (
    <MotionMain>
      <MotionDiv mode="down" delay={0.2} classNames="mt-36">
        <BluePingDiv>
          <SvgIcon href="lipstick" fill="#4285F4"></SvgIcon>
        </BluePingDiv>
      </MotionDiv>

      <MotionDiv mode="up" delay={0.3} classNames="mb-24 mt-[73px] text-center">
        <h3 className="text-[40px] text-gblue-normal">Introduction to</h3>
        <h1 className="mx-auto mt-2	max-w-xl text-[68px] leading-tight text-gblue-normal">
          AI Propensity Model Simulator
        </h1>
      </MotionDiv>

      <MotionDiv mode="up" delay={0.4} name={''}>
        {/* classNames="h-[608px] w-screen bg-white p-40 mb-"> */}
        {/* <SvgIcon href="laptop"></SvgIcon> */}
        <iframe
          className="h-[608px] w-screen"
          src="https://www.youtube.com/embed/TZzp-od42lc?autoplay=1&controls=0"
          allow="accelerometer; autoplay;"></iframe>
        {/* <iframe
          src="https://drive.google.com/file/d/13VV-slQC91AaufxiFT9zuVLz6cgg22Rb/preview"
          className="h-[608px] w-screen"
          allow="autoplay"
          id="video"></iframe> */}
      </MotionDiv>

      <MotionDiv mode="down" delay={0.5} classNames="justify-self-end mt-auto">
        <Link href="/pages/query1">
          <Button>Skip</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
