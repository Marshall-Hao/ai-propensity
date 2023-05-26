'use client';
import { SvgIcon, Button, PageHeader, Card } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';

export default function Page() {
  return (
    <MotionMain>
      <PageHeader svg={<SvgIcon href="mirror-copy"></SvgIcon>}>
        How would you like to <br /> train your model?
      </PageHeader>

      <div className="mt-28">
        {/* <div className="mb-14 flex h-[426px] w-[930px] items-center justify-center rounded-3xl bg-gblue-normal">
          <div className="text-center">
            <h1 className="text-5xl">Basic ML</h1>
            <h2 className="mt-5 text-4xl">Logistic Regression</h2>
          </div>
        </div> */}
        <Card h1={'Basic ML'} h2={'Logistic Regression'}></Card>
        <Card h1={'Advanced ML'} h2={'AutoML'}></Card>
      </div>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/pages/query2">
          <Button>Next</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
