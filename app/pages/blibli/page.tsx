'use client';
import { Button, PageHeader, SvgIcon } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import InfoCard from '@/components/common/InfoCard';
import Image from 'next/image';
import blibli_3 from '/public/Images/blibli_3.png';

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

        {/* <InfoCard svg={'blibli_3'} mode={'left'} delay={0.6}>
          Drove +300% ROAS compared to control campaign
        </InfoCard> */}

        <MotionDiv mode={'left'} delay={0.6}>
          <div className="w-[500px] text-center">
            <div className="flex justify-center">
              <Image src={blibli_3} alt={''} width={233} height={168}></Image>
            </div>
            <p className="mt-5 text-[28px] leading-normal text-gblue-normal">
              Drove +300% ROAS compared to control campaign
            </p>
          </div>
        </MotionDiv>
      </div>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/pages/query1">
          <Button>Next</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
