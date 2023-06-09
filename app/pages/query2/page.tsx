'use client';
import { SvgIcon, Button, PageHeader, Card } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import useAIStore from '@/store';
import { useRouter } from 'next/navigation';

export default function Page() {
  const setBasic = useAIStore((state) => state.setBasic);
  const setAdvanced = useAIStore((state) => state.setAdvanced);
  const ml = useAIStore((state) => state.ml);
  const { push } = useRouter();
  return (
    <MotionMain>
      <PageHeader
        svg={<SvgIcon href="mirror" fill="#4285F4"></SvgIcon>}
        text={'text-[55px]'}>
        How would you like to <br /> train your model?
      </PageHeader>

      <div className="mt-28">
        <MotionDiv mode="left" delay={0.4} onClick={setBasic}>
          <Card
            h1={'Basic ML'}
            h2={'Logistic Regression'}
            bg="text-gblue-normal border-8 border-gblue-normal "
            ml="basic"></Card>
        </MotionDiv>
        <MotionDiv mode="right" delay={0.4} onClick={setAdvanced}>
          <Card
            h1={'Advanced ML'}
            h2={'AutoML'}
            bg="text-gblue-normal border-8 border-gblue-normal"
            ml="advanced"></Card>
        </MotionDiv>
      </div>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Button disabled={ml === ''} onClick={() => push('/pages/results')}>
          {ml === '' ? 'Please Select' : 'Next'}
        </Button>
      </MotionDiv>
    </MotionMain>
  );
}
