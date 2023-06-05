'use client';
import { WhiteCard, SvgIcon, Square, ResultsHeader } from '@/components/common';
import Circle from '@/components/common/Circle';
import useAIStore from '@/store';

export default function Page() {
  const data = useAIStore((state) => state.dataSelect);
  const ml = useAIStore((state) => state.ml);

  return (
    <div>
      {/* 10% */}
      {data < 3 && ml === 'basic' && (
        <>
          {/* Initial Positions */}
          <ResultsHeader
            left_results={
              <>
                <Square left={'left-[242px]'} top={'top-[320px]'}></Square>
                <Square left={'left-[360px]'} top={'top-[352px]'}></Square>
                <Square left={'left-[178px]'} top={'top-[410px]'}></Square>
                <Square left={'left-[291px]'} top={'top-[429px]'}></Square>
                <Square left={'left-[231px]'} top={'top-[536px]'}></Square>
                <Square left={'left-[343px]'} top={'top-[514px]'}></Square>
              </>
            }
            right_results={
              <>
                <Circle left={'left-[776px]'} top={'top-[252px]'}></Circle>
                <Circle left={'left-[686px]'} top={'top-[319px]'}></Circle>
                <Circle left={'left-[808px]'} top={'top-[341px]'}></Circle>
                <Circle left={'left-[634px]'} top={'top-[418px]'}></Circle>
                <Circle left={'left-[757px]'} top={'top-[429px]'}></Circle>
                <Circle left={'left-[881px]'} top={'top-[417px]'}></Circle>
                <Circle left={'left-[684px]'} top={'top-[518px]'}></Circle>
                <Circle left={'left-[765px]'} top={'top-[545px]'}></Circle>
                <Circle left={'left-[850px]'} top={'top-[524px]'}></Circle>
              </>
            }></ResultsHeader>
          {/* Final Positions */}
          {/* <ResultsHeader
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
            }></ResultsHeader> */}
          <WhiteCard
            percentage={10}
            p={
              'To increase the accuracy of of your results, try selecting more datasets and leverage advanced ML to train your model'
            }
            button_text={'Try Again'}
            button_link={'/pages/query1'}
            cross_svg={<SvgIcon href="cross"></SvgIcon>}></WhiteCard>
        </>
      )}

      {/* 25% */}
      {data < 3 && ml === 'advanced' && (
        <>
          {/* Initial Positions */}
          <ResultsHeader
            left_results={
              <>
                <Square left={'left-[340px]'} top={'top-[265px]'}></Square>
                <Square left={'left-[242px]'} top={'top-[320px]'}></Square>
                <Square left={'left-[360px]'} top={'top-[352px]'}></Square>
                <Square left={'left-[178px]'} top={'top-[410px]'}></Square>
                <Square left={'left-[291px]'} top={'top-[429px]'}></Square>
                <Square left={'left-[231px]'} top={'top-[536px]'}></Square>
                <Square left={'left-[343px]'} top={'top-[514px]'}></Square>
              </>
            }
            right_results={
              <>
                <Circle left={'left-[776px]'} top={'top-[252px]'}></Circle>
                <Circle left={'left-[686px]'} top={'top-[319px]'}></Circle>
                <Circle left={'left-[808px]'} top={'top-[341px]'}></Circle>
                <Circle left={'left-[634px]'} top={'top-[418px]'}></Circle>
                <Circle left={'left-[757px]'} top={'top-[429px]'}></Circle>
                <Circle left={'left-[881px]'} top={'top-[417px]'}></Circle>
                <Circle left={'left-[684px]'} top={'top-[518px]'}></Circle>
                <Circle left={'left-[765px]'} top={'top-[545px]'}></Circle>
                <Circle left={'left-[850px]'} top={'top-[524px]'}></Circle>
              </>
            }></ResultsHeader>
          {/* Final Positions */}
          {/* <ResultsHeader
            left_results={
              <>
                <Circle left={'left-36'} top={'top-56'}></Circle>
                <Square left={'left-60'} top={'top-80'}></Square>
                <Square left={'left-[373px]'} top={'top-[274px]'}></Square>
                <Square left={'left-[373px]'} top={'top-[373px]'}></Square>
                <Square left={'left-44'} top={'top-[417px]'}></Square>
                <Circle left={'left-[179px]'} top={'top-[575px]'}></Circle>
                <Circle left={'left-[325px]'} top={'top-[575px]'}></Circle>
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
                <Square left={'left-[763px]'} top={'top-[597px]'}></Square>
                <Square left={'left-[830px]'} top={'top-[496px]'}></Square>
              </>
            }></ResultsHeader> */}
          <WhiteCard
            percentage={25}
            p={
              'Advance ML requires more data to be accurate. Try training your model with more datasets'
            }
            button_text={'Try Again'}
            button_link={'/pages/query1'}
            cross_svg={<SvgIcon href="cross"></SvgIcon>}></WhiteCard>
        </>
      )}

      {/* 45 */}
      {data >= 3 && ml === 'basic' && (
        <>
          {/* Initial Positions */}
          <ResultsHeader
            left_results={
              <>
                <Square left={'left-[242px]'} top={'top-[320px]'}></Square>
                <Square left={'left-[360px]'} top={'top-[352px]'}></Square>
                <Square left={'left-[178px]'} top={'top-[410px]'}></Square>
                <Square left={'left-[291px]'} top={'top-[429px]'}></Square>
                <Square left={'left-[231px]'} top={'top-[536px]'}></Square>
                <Square left={'left-[343px]'} top={'top-[514px]'}></Square>
              </>
            }
            right_results={
              <>
                <Circle left={'left-[776px]'} top={'top-[252px]'}></Circle>
                <Circle left={'left-[686px]'} top={'top-[319px]'}></Circle>
                <Circle left={'left-[808px]'} top={'top-[341px]'}></Circle>
                <Circle left={'left-[634px]'} top={'top-[418px]'}></Circle>
                <Circle left={'left-[757px]'} top={'top-[429px]'}></Circle>
                <Circle left={'left-[881px]'} top={'top-[417px]'}></Circle>
                <Circle left={'left-[684px]'} top={'top-[518px]'}></Circle>
                <Circle left={'left-[765px]'} top={'top-[545px]'}></Circle>
                <Circle left={'left-[850px]'} top={'top-[524px]'}></Circle>
              </>
            }></ResultsHeader>
          {/* Final Positions */}
          {/* <ResultsHeader
            left_results={
              <>
                <Circle left={'left-36'} top={'top-56'}></Circle>
                <Square left={'left-[165px]'} top={'top-[395px]'}></Square>
                <Square left={'left-96'} top={'top-[296px]'}></Square>
                <Circle left={'left-[373px]'} top={'top-[436px]'}></Circle>
                <Circle left={'left-64'} top={'top-[513px]'}></Circle>
                <Circle left={'left-44'} top={'top-[575px]'}></Circle>
                <Circle left={'left-[325px]'} top={'top-[575px]'}></Circle>
              </>
            }
            right_results={
              <>
                <Square left={'left-[905px]'} top={'top-60'}></Square>
                <Circle left={'left-[686px]'} top={'top-80'}></Circle>
                <Circle left={'left-[808px]'} top={'top-[340px]'}></Circle>
                <Circle left={'left-[580px]'} top={'top-[475px]'}></Circle>
                <Circle left={'left-[881px]'} top={'top-[417px]'}></Circle>
                <Square left={'left-[755px]'} top={'top-[490px]'}></Square>
                <Square left={'left-[748px]'} top={'top-[597px]'}></Square>
                <Square left={'left-[844px]'} top={'top-[597px]'}></Square>
              </>
            }></ResultsHeader> */}
          <WhiteCard
            percentage={45}
            p={
              'By using Advance ML, Google will find the best types of models to generate the best results for you'
            }
            button_text={'Try Again'}
            button_link={'/pages/query1'}
            cross_svg={<SvgIcon href="cross"></SvgIcon>}></WhiteCard>
        </>
      )}

      {/* 95 */}
      {data >= 3 && ml === 'advanced' && (
        <>
          {/* Initial Positions */}
          <ResultsHeader
            left_results={
              <>
                <Square left={'left-[340px]'} top={'top-[265px]'}></Square>
                <Square left={'left-[280px]'} top={'top-[200px]'}></Square>
                <Square left={'left-[270px]'} top={'top-[340px]'}></Square>
                <Square left={'left-[200px]'} top={'top-[260px]'}></Square>
                <Square left={'left-[150px]'} top={'top-[320px]'}></Square>
                <Square left={'left-[360px]'} top={'top-[352px]'}></Square>
                <Square left={'left-[178px]'} top={'top-[410px]'}></Square>
                <Square left={'left-[291px]'} top={'top-[429px]'}></Square>
                <Square left={'left-[231px]'} top={'top-[536px]'}></Square>
                <Square left={'left-[343px]'} top={'top-[514px]'}></Square>
              </>
            }
            right_results={
              <>
                <Circle left={'left-[776px]'} top={'top-[252px]'}></Circle>
                <Circle left={'left-[686px]'} top={'top-[319px]'}></Circle>
                <Circle left={'left-[808px]'} top={'top-[341px]'}></Circle>
                <Circle left={'left-[634px]'} top={'top-[418px]'}></Circle>
                <Circle left={'left-[757px]'} top={'top-[429px]'}></Circle>
                <Circle left={'left-[881px]'} top={'top-[417px]'}></Circle>
                <Circle left={'left-[684px]'} top={'top-[518px]'}></Circle>
                <Circle left={'left-[765px]'} top={'top-[545px]'}></Circle>
                <Circle left={'left-[850px]'} top={'top-[524px]'}></Circle>
              </>
            }></ResultsHeader>
          {/* Final Positions */}
          {/* <ResultsHeader
            left_results={
              <>
                <Circle left={'left-[83px]'} top={'top-[214px]'}></Circle>
                <Circle left={'left-[173px]'} top={'top-[207px]'}></Circle>
                <Circle left={'left-[142px]'} top={'top-[297px]'}></Circle>
                <Circle left={'left-[82px]'} top={'top-[362px]'}></Circle>
                <Circle left={'left-[270px]'} top={'top-[356px]'}></Circle>
                <Circle left={'left-[61px]'} top={'top-[440px]'}></Circle>
                <Circle left={'left-[172px]'} top={'top-[418px]'}></Circle>
                <Circle left={'left-[195px]'} top={'top-[534px]'}></Circle>
                <Square left={'left-[275px]'} top={'top-[462px]'}></Square>
              </>
            }
            right_results={
              <>
                <Circle left={'left-[766px]'} top={'top-[378px]'}></Circle>
                <Square left={'left-[882px]'} top={'top-[264px]'}></Square>
                <Square left={'left-[839px]'} top={'top-[363px]'}></Square>
                <Square left={'left-[930px]'} top={'top-[341px]'}></Square>
                <Square left={'left-[810px]'} top={'top-[471px]'}></Square>
                <Square left={'left-[897px]'} top={'top-[471px]'}></Square>
                <Square left={'left-[986px]'} top={'top-[427px]'}></Square>
                <Square left={'left-[810px]'} top={'top-[610px]'}></Square>
                <Square left={'left-[919px]'} top={'top-[566px]'}></Square>
              </>
            }></ResultsHeader> */}
          <WhiteCard
            percentage={95}
            p={
              'With the power of Google AI and our full suite of privacy-safe datasets, you can accurately predict customers who are most likely to convert for your business'
            }
            button_text={'Next'}
            button_link={'/pages/last'}></WhiteCard>
        </>
      )}
    </div>
  );
}
