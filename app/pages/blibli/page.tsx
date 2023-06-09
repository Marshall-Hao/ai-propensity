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
        svg={<SvgIcon href="shopping-bag" fill="#4285F4"></SvgIcon>}
        text={'text-[68px]'}>
        Blibli
      </PageHeader>

      <div className="mb-28 mt-5 text-center">
        <p className="text-[40px] leading-tight text-gblue-normal">
          E-commerce retailer in Indonesia
        </p>
      </div>

      <div className="flex flex-col gap-y-20">
        <InfoCard svg={'blibli_1'} mode={'left'} delay={0.6}>
          Deployed AI propensity model to identify users with highest propensity
          to purchase
        </InfoCard>

        <InfoCard svg={'blibli_2'} mode={'right'} delay={0.6}>
          Ran Smart Shopping Campaign targeting users with highest propensity to
          purchase in the electronics category
        </InfoCard>

        <InfoCard svg={'blibli_3'} mode={'left'} delay={0.6}>
          Drove +300% ROAS compared to control campaign
        </InfoCard>
      </div>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/pages/query1">
          <Button>Next</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
