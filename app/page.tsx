'use client';
import { SvgIcon, PingDiv } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';

export default function Home() {
  const icons = ['lipstick', 'mirror', 'mascara'];

  return (
    <MotionMain bgColor="bg-gblue-normal">
      <div className="-mt-5 flex flex-col gap-y-12">
        {icons.map((ele, i) => (
          <MotionDiv mode="down" delay={i * 0.1} key={i}>
            <PingDiv>
              <SvgIcon href={ele}></SvgIcon>
            </PingDiv>
          </MotionDiv>
        ))}
      </div>

      <MotionDiv mode="up" delay={icons.length * 0.1}>
        <section className="mb-72 mt-24 text-center">
          <h3 className="text-5xl	">Welcome to</h3>
          <h1 className="mx-auto mb-12 mt-5	max-w-2xl text-7xl leading-tight">
            AI Propensity Model Simulator
          </h1>
          <p className="max-w-2xl text-2xl">
            Learn how propensity model works and
            <br /> discover new customer segments for your business!
          </p>
        </section>
      </MotionDiv>

      <MotionDiv mode="up" delay={icons.length * 0.1 + 0.1}>
        <Link href="/pages/video">
          <div className="h-48 w-48 rounded-full border-8 border-white px-9 py-8">
            <SvgIcon animate="animate-pulse" href="right_arrow"></SvgIcon>
          </div>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
