'use client';
import { Button, PageHeader, SvgIcon } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import InfoCard from '@/components/common/InfoCard';
import Image from 'next/image';
import dtac_2 from '/public/Images/dtac_2.png';
import dtac_3 from '/public/Images/dtac_3.png';

export default function Page() {
  return (
    <MotionMain>
      <PageHeader
        svg={<SvgIcon href="phone" fill="#4285F4"></SvgIcon>}
        text={'text-[68px]'}>
        dtac
      </PageHeader>

      <div className="mb-28 mt-5 text-center">
        <p className="text-[40px] leading-tight text-gblue-normal">
          <em className="font-bold">Leading telco in Thailand</em>
        </p>
      </div>

      <div className="flex flex-col gap-y-20">
        <InfoCard svg={'dtac_1'} mode={'left'} delay={0.6}>
          Implemented AI propensity model to identify potential prepaid
          customers from website visitors
        </InfoCard>

        {/* <InfoCard svg={'dtac_2'} mode={'right'} delay={0.6}>
          Remarketed to top 30% of visitors who were most likely to purchase
        </InfoCard> */}

        <MotionDiv mode={'left'} delay={0.6}>
          <div className="w-[500px] text-center">
            <div className="flex justify-center">
              <Image src={dtac_2} alt={''} width={233} height={168}></Image>
            </div>
            <p className="mt-5 text-[28px] leading-normal text-gblue-normal">
              Drove +300% ROAS compared to control campaign
            </p>
          </div>
        </MotionDiv>
{/*
        <InfoCard svg={'dtac_3'} mode={'left'} delay={0.6}>
          Drove +41% conversions at -30% cost compared to control campaign
        </InfoCard> */}

        <MotionDiv mode={'left'} delay={0.6}>
          <div className="w-[500px] text-center">
            <div className="flex justify-center">
              <Image src={dtac_3} alt={''} width={135} height={137}></Image>
            </div>
            <p className="mt-5 text-[28px] leading-normal text-gblue-normal">
            Drove +41% conversions at -30% cost compared to control campaign
            </p>
          </div>
        </MotionDiv>

      </div>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/pages/blibli">
          <Button>Next</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
