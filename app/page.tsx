'use client';
import { SvgIcon, PingDiv } from '@/components/common';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const icons = ['lipstick', 'mirror', 'mascara'];
  const [show, setShow] = useState(true);

  const { push } = useRouter();

  return (
    <MotionMain bgColor="bg-gblue-normal">
      <div className="-mt-5 flex min-h-[672px] flex-col gap-y-12">
        <AnimatePresence onExitComplete={() => push('/pages/video')}>
          {icons.map((ele, i) => {
            return (
              show && (
                <MotionDiv mode="down" delay={i * 0.1} key={i} name={ele}>
                  <PingDiv>
                    <SvgIcon href={ele}></SvgIcon>
                  </PingDiv>
                </MotionDiv>
              )
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {show && (
          <MotionDiv mode="up" delay={icons.length * 0.1}>
            <section className="mb-72 mt-24 w-[700px] text-center">
              <h3 className="text-5xl	">Welcome to</h3>
              <h1 className="mx-auto mb-12 mt-5 text-8xl leading-tight">
                AI Propensity Model Simulator
              </h1>
              <p className="max-w-2xl text-2xl">
                Learn how propensity model works and
                <br /> discover new customer segments for your business!
              </p>
            </section>
          </MotionDiv>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <MotionDiv mode="up" delay={icons.length * 0.1 + 0.1}>
            <div
              className="h-48 w-48 rounded-full border-8 border-white px-9 py-8"
              onClick={() => setShow(false)}>
              <SvgIcon animate="animate-pulse" href="right_arrow"></SvgIcon>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionMain>
  );
}
