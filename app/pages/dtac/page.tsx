'use client';
import { Button, PageHeader, SvgIcon } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import InfoCard from '@/components/common/InfoCard';

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
          Leading telco in Thailand
        </p>
      </div>

      <div className="flex flex-col gap-y-20">
        <InfoCard svg={'dtac_1'} mode={'left'} delay={0.6}>
          Implemented AI propensity model to identify potential prepaid
          customers from website visitors
        </InfoCard>

        <InfoCard svg={'dtac_2'} mode={'right'} delay={0.6}>
          Remarketed to top 30% of visitors who were most likely to purchase
        </InfoCard>

        <InfoCard svg={'dtac_3'} mode={'left'} delay={0.6}>
          Drove +41% conversions at -30% cost compared to control campaign
        </InfoCard>
      </div>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/pages/blibli">
          <Button>Next</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
