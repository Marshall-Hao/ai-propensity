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
                <Square
                  startLeft={440}
                  startTop={220}
                  endLeft={905}
                  endTop={240}></Square>
                <Square
                  startLeft={450}
                  startTop={300}
                  endLeft={240}
                  endTop={320}></Square>
                <Square
                  startLeft={350}
                  startTop={400}
                  endLeft={384}
                  endTop={288}></Square>
                <Square
                  startLeft={420}
                  startTop={430}
                  endLeft={184}
                  endTop={410}></Square>
                <Square
                  startLeft={400}
                  startTop={550}
                  endLeft={288}
                  endTop={430}></Square>
                <Square
                  startLeft={460}
                  startTop={510}
                  endLeft={384}
                  endTop={400}></Square>
              </>
            }
            right_results={
              <>
                <Circle
                  startLeft={580}
                  startTop={250}
                  endLeft={128}
                  endTop={224}></Circle>
                <Circle
                  startLeft={600}
                  startTop={320}
                  endLeft={686}
                  endTop={320}></Circle>
                <Circle
                  startLeft={660}
                  startTop={340}
                  endLeft={808}
                  endTop={340}></Circle>
                <Circle
                  startLeft={580}
                  startTop={410}
                  endLeft={562}
                  endTop={420}></Circle>
                <Circle
                  startLeft={610}
                  startTop={460}
                  endLeft={719}
                  endTop={429}></Circle>
                <Circle
                  startLeft={650}
                  startTop={410}
                  endLeft={881}
                  endTop={417}></Circle>
                <Circle
                  startLeft={640}
                  startTop={540}
                  endLeft={618}
                  endTop={540}></Circle>
                <Circle
                  startLeft={570}
                  startTop={580}
                  endLeft={720}
                  endTop={606}></Circle>
                <Circle
                  startLeft={590}
                  startTop={520}
                  endLeft={176}
                  endTop={575}></Circle>
              </>
            }></ResultsHeader>
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
                <Square
                  startLeft={440}
                  startTop={220}
                  endLeft={905}
                  endTop={240}></Square>
                <Square
                  startLeft={450}
                  startTop={300}
                  endLeft={240}
                  endTop={320}></Square>
                <Square
                  startLeft={350}
                  startTop={400}
                  endLeft={373}
                  endTop={274}></Square>
                <Square
                  startLeft={420}
                  startTop={430}
                  endLeft={373}
                  endTop={373}></Square>
                <Square
                  startLeft={400}
                  startTop={550}
                  endLeft={176}
                  endTop={417}></Square>
                <Square
                  startLeft={460}
                  startTop={510}
                  endLeft={363}
                  endTop={597}></Square>
                <Square
                  startLeft={340}
                  startTop={505}
                  endLeft={830}
                  endTop={496}></Square>
              </>
            }
            right_results={
              <>
                <Circle
                  startLeft={580}
                  startTop={250}
                  endLeft={144}
                  endTop={224}></Circle>
                <Circle
                  startLeft={600}
                  startTop={320}
                  endLeft={686}
                  endTop={320}></Circle>
                <Circle
                  startLeft={660}
                  startTop={340}
                  endLeft={808}
                  endTop={340}></Circle>
                <Circle
                  startLeft={580}
                  startTop={410}
                  endLeft={562}
                  endTop={420}></Circle>
                <Circle
                  startLeft={610}
                  startTop={460}
                  endLeft={719}
                  endTop={429}></Circle>
                <Circle
                  startLeft={650}
                  startTop={410}
                  endLeft={881}
                  endTop={417}></Circle>
                <Circle
                  startLeft={640}
                  startTop={540}
                  endLeft={618}
                  endTop={540}></Circle>
                <Circle
                  startLeft={570}
                  startTop={580}
                  endLeft={763}
                  endTop={597}></Circle>
                <Circle
                  startLeft={590}
                  startTop={520}
                  endLeft={330}
                  endTop={196}></Circle>
              </>
            }></ResultsHeader>
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
                <Square
                  startLeft={440}
                  startTop={220}
                  endLeft={905}
                  endTop={240}></Square>
                <Square
                  startLeft={450}
                  startTop={300}
                  endLeft={165}
                  endTop={395}></Square>
                <Square
                  startLeft={350}
                  startTop={400}
                  endLeft={384}
                  endTop={296}></Square>
                <Square
                  startLeft={420}
                  startTop={430}
                  endLeft={755}
                  endTop={490}></Square>
                <Square
                  startLeft={400}
                  startTop={550}
                  endLeft={748}
                  endTop={597}></Square>
                <Square
                  startLeft={460}
                  startTop={510}
                  endLeft={844}
                  endTop={597}></Square>
              </>
            }
            right_results={
              <>
                <Circle
                  startLeft={580}
                  startTop={250}
                  endLeft={144}
                  endTop={224}></Circle>
                <Circle
                  startLeft={600}
                  startTop={320}
                  endLeft={686}
                  endTop={320}></Circle>
                <Circle
                  startLeft={660}
                  startTop={340}
                  endLeft={808}
                  endTop={340}></Circle>
                <Circle
                  startLeft={580}
                  startTop={410}
                  endLeft={580}
                  endTop={475}></Circle>
                <Circle
                  startLeft={610}
                  startTop={460}
                  endLeft={881}
                  endTop={417}></Circle>
                <Circle
                  startLeft={650}
                  startTop={410}
                  endLeft={373}
                  endTop={436}></Circle>
                <Circle
                  startLeft={640}
                  startTop={540}
                  endLeft={240}
                  endTop={513}></Circle>
                <Circle
                  startLeft={570}
                  startTop={580}
                  endLeft={176}
                  endTop={575}></Circle>
                <Circle
                  startLeft={590}
                  startTop={520}
                  endLeft={325}
                  endTop={575}></Circle>
              </>
            }></ResultsHeader>

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
                <Square
                  startLeft={440}
                  startTop={220}
                  endLeft={882}
                  endTop={264}></Square>
                <Square
                  startLeft={450}
                  startTop={300}
                  endLeft={839}
                  endTop={363}></Square>
                <Square
                  startLeft={350}
                  startTop={400}
                  endLeft={930}
                  endTop={341}></Square>
                <Square
                  startLeft={420}
                  startTop={430}
                  endLeft={810}
                  endTop={471}></Square>
                <Square
                  startLeft={400}
                  startTop={550}
                  endLeft={897}
                  endTop={471}></Square>
                <Square
                  startLeft={460}
                  startTop={510}
                  endLeft={986}
                  endTop={427}></Square>
                <Square
                  startLeft={340}
                  startTop={505}
                  endLeft={810}
                  endTop={610}></Square>
                <Square
                  startLeft={290}
                  startTop={430}
                  endLeft={919}
                  endTop={566}></Square>
                <Square
                  startLeft={230}
                  startTop={530}
                  endLeft={331}
                  endTop={536}></Square>
              </>
            }
            right_results={
              <>
                <Circle
                  startLeft={580}
                  startTop={250}
                  endLeft={766}
                  endTop={378}></Circle>
                <Circle
                  startLeft={600}
                  startTop={320}
                  endLeft={83}
                  endTop={214}></Circle>
                <Circle
                  startLeft={660}
                  startTop={340}
                  endLeft={142}
                  endTop={297}></Circle>
                <Circle
                  startLeft={580}
                  startTop={410}
                  endLeft={82}
                  endTop={362}></Circle>
                <Circle
                  startLeft={610}
                  startTop={460}
                  endLeft={270}
                  endTop={356}></Circle>
                <Circle
                  startLeft={650}
                  startTop={410}
                  endLeft={61}
                  endTop={440}></Circle>
                <Circle
                  startLeft={640}
                  startTop={540}
                  endLeft={172}
                  endTop={418}></Circle>
                <Circle
                  startLeft={570}
                  startTop={580}
                  endLeft={195}
                  endTop={534}></Circle>
                <Circle
                  startLeft={590}
                  startTop={520}
                  endLeft={275}
                  endTop={462}></Circle>
              </>
            }></ResultsHeader>
          {/* Final Positions */}
          {/* <ResultsHeader
            left_results={
              <>
                <Circle left={'left-[83px]'} top={214px]'}></Circle>
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
