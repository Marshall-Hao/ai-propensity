'use client';
import { SvgIcon, Button, PageHeader, Dataset } from '@/components/common';
import Link from 'next/link';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';

export default function Page() {
  return (
    <MotionMain>
      <PageHeader svg={<SvgIcon href="mascara-copy"></SvgIcon>}>
        Select as many datasets you would <br /> like to train your model with
      </PageHeader>

      <div className="mt-[90px]">
        <div className="mx-[70px] grid auto-cols-max grid-cols-12">
          <Dataset
            mode="down"
            delay={0.1}
            // eslint-disable-next-line react/no-children-prop
            children={'Traffic Source'}
            svg={<SvgIcon href="traffic_source"></SvgIcon>}
            col={'col-start-5'}></Dataset>

          <Dataset
            mode="left"
            delay={0.2}
            // eslint-disable-next-line react/no-children-prop
            children={'Session Quality'}
            svg={<SvgIcon href="session_quality"></SvgIcon>}
            col={'col-start-1'}></Dataset>

          <Dataset
            mode="right"
            delay={0.2}
            // eslint-disable-next-line react/no-children-prop
            children={'Geo Location'}
            svg={<SvgIcon href="geo_location"></SvgIcon>}
            col={'col-start-9'}></Dataset>

          <Dataset
            mode="up"
            delay={0.1}
            // eslint-disable-next-line react/no-children-prop
            children={'Time Spent'}
            svg={<SvgIcon href="time_spent"></SvgIcon>}
            col={'col-start-5 -translate-y-[55px]'}></Dataset>

          <Dataset
            mode="right"
            delay={0.2}
            // eslint-disable-next-line react/no-children-prop
            children={'eCommerce Action'}
            svg={<SvgIcon href="shopping-bag"></SvgIcon>}
            col={'col-start-2'}></Dataset>

          <Dataset
            mode="left"
            delay={0.2}
            // eslint-disable-next-line react/no-children-prop
            children={'User Tenure'}
            svg={<SvgIcon href="user"></SvgIcon>}
            col={'col-start-8'}></Dataset>
        </div>
      </div>

      <MotionDiv mode="up" delay={0.4} classNames="justify-self-end mt-auto">
        <Link href="/pages/query2">
          <Button>Next</Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
