'use client';
import { SvgIcon, Button, PageHeader } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';

export default function Page() {
  return (
    <MotionMain>
      <PageHeader svg={<SvgIcon href="mascara-copy"></SvgIcon>}>
        Select the type of data you would <br /> like to train your model with
      </PageHeader>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/pages/query2">
          <Button>Next</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
