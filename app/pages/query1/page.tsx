'use client';
import { SvgIcon, Button, PageHeader, Dataset } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import useAIStore from '@/store';
import { useRouter } from 'next/navigation';

export default function Page() {
  const num = useAIStore((state) => state.dataSelect);
  const { push } = useRouter();

  return (
    <MotionMain>
      <PageHeader
        svg={<SvgIcon href="mascara" fill="#4285F4"></SvgIcon>}
        text={'text-[55px]'}>
        Select the datasets you would <br /> like to train your model with
      </PageHeader>

      <div className="mt-[90px]">
        <div className="mx-[70px] grid auto-cols-max grid-cols-12">
          <Dataset
            mode="down"
            delay={0.1}
            // eslint-disable-next-line react/no-children-prop
            children={'Traffic Source'}
            svg="traffic_source"
            col={'col-start-5'}></Dataset>

          <Dataset
            mode="left"
            delay={0.2}
            floatAnimtion="animate-float-delay"
            // eslint-disable-next-line react/no-children-prop
            children={'Session Quality'}
            svg="session_quality"
            col={'col-start-1'}></Dataset>

          <Dataset
            mode="right"
            delay={0.2}
            floatAnimtion="animate-float-delay"
            // eslint-disable-next-line react/no-children-prop
            children={'Geo Location'}
            svg="geo_location"
            col={'col-start-9'}></Dataset>

          <Dataset
            mode="up"
            delay={0.1}
            // eslint-disable-next-line react/no-children-prop
            children={'Time Spent'}
            svg="time_spent"
            col={'col-start-5 -translate-y-[55px]'}></Dataset>

          <Dataset
            mode="right"
            delay={0.2}
            floatAnimtion="animate-float-delay"
            // eslint-disable-next-line react/no-children-prop
            children={'E-commerce Action'}
            svg="shopping-bag"
            col={'col-start-2'}></Dataset>

          <Dataset
            mode="left"
            delay={0.2}
            floatAnimtion="animate-float-delay"
            // eslint-disable-next-line react/no-children-prop
            children={'User Tenure'}
            svg="user"
            col={'col-start-8'}></Dataset>
        </div>
      </div>
      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Button disabled={num === 0} onClick={() => push('/pages/query2')}>
          {num === 0 ? 'Please Select' : 'Next'}
        </Button>
      </MotionDiv>
    </MotionMain>
  );
}
