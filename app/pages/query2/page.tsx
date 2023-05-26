'use client';
import { SvgIcon, Button, PageHeader } from '@/components/common';
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
        <div className="h-[426px] w-[930px] bg-gblue-normal"></div>
      </div>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/pages/query2">
          <Button>Next</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
