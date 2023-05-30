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
        <MotionDiv mode="left" delay={0.4}>
          <Card
            h1={'Basic ML'}
            h2={'Logistic Regression'}
            bg="text-gblue-normal border-8 border-gblue-normal "></Card>
        </MotionDiv>
        <MotionDiv mode="right" delay={0.4}>
          <Card h1={'Advanced ML'} h2={'AutoML'} bg="bg-gblue-normal"></Card>
        </MotionDiv>
      </div>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/pages/results">
          <Button>Next</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
