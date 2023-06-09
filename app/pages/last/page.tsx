'use client';
import { Button, PageHeader, SvgIcon } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Image from 'next/image';
import AutoMl from '/public/Images/Automl.png';
import Compass from '/public/Images/Compass.png';

export default function Page() {
  return (
    <MotionMain>
      <PageHeader
        svg={<SvgIcon href="lipstick" fill="#4285F4"></SvgIcon>}
        text={'text-[55px]'}>
        Thank you for visiting <br /> AI Propensity Model Simulator
      </PageHeader>

      <div className="mt-20 text-center">
        <p className="text-4xl leading-tight text-gblue-normal">
          To learn more about AutoML and solutions available, <br /> scan the QR
          codes below:
        </p>
      </div>

      <MotionDiv mode="left" delay={0.4}>
        <div className="mt-36">
          <Image src={AutoMl} alt={''} width={288} height={288}></Image>
          <p className="mt-5 text-center text-3xl text-gblue-normal">Auto ML</p>
        </div>
      </MotionDiv>

      <MotionDiv mode="right" delay={0.4}>
        <div className="mt-[77px]">
          <Image src={Compass} alt={''} width={288} height={288}></Image>
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
