'use client';
import { WhiteCard, SvgIcon, Square, ResultsHeader } from '@/components/common';
import Circle from '@/components/common/Circle';

export default function Page() {
  return (
    <div>
      <ResultsHeader
        left_results={
          <>
            <Circle left={'left-32'} top={'top-56'}></Circle>
            <Square left={'left-60'} top={'top-80'}></Square>
            <Square left={'left-96'} top={'top-72'}></Square>
            <Square left={'left-[184px]'} top={'top-[410px]'}></Square>
            <Square left={'left-72'} top={'top-[430px]'}></Square>
            <Square left={'left-96'} top={'top-[400px]'}></Square>
            <Circle left={'left-44'} top={'top-[575px]'}></Circle>
          </>
        }
        right_results={
          <>
            <Square left={'left-[905px]'} top={'top-60'}></Square>
            <Circle left={'left-[686px]'} top={'top-80'}></Circle>
            <Circle left={'left-[808px]'} top={'top-[340px]'}></Circle>
            <Circle left={'left-[562px]'} top={'top-[420px]'}></Circle>
            <Circle left={'left-[719px]'} top={'top-[429px]'}></Circle>
            <Circle left={'left-[881px]'} top={'top-[417px]'}></Circle>
            <Circle left={'left-[618px]'} top={'top-[540px]'}></Circle>
            <Circle left={'left-[720px]'} top={'top-[606px]'}></Circle>
          </>
        }></ResultsHeader>
      <WhiteCard
        percentage={10}
        p={
          'To increase the accuracy of of your results, try selecting more datasets and leverage advanced ML to train your model'
        }
        button_text={'Try Again'}
        cross_svg={<SvgIcon href="cross"></SvgIcon>}></WhiteCard>
    </div>
  );
}
