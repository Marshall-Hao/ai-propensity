import { SvgIcon, BluePingDiv, Button } from '@/components/common';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gblue-light">
      <div className="mt-36">
        <BluePingDiv>
          <SvgIcon href="lipstick-copy"></SvgIcon>
          {/* <SvgIcon href="lipstick" fill="#4285F4" stroke="#4285F4"></SvgIcon> */}
        </BluePingDiv>
      </div>

      <div className="mb-24 mt-[73px] text-center">
        <h3 className="text-[40px] text-gblue-normal">Welcome to</h3>
        <h1 className="mx-auto mt-2	max-w-xl text-[68px] leading-tight text-gblue-normal">
          AI Propensity Model Simulator
        </h1>
      </div>

      <div className="h-[608px] w-screen bg-white p-40">
        <SvgIcon href="laptop"></SvgIcon>
      </div>

      <Link href="/pages/query1">
        <Button>Skip</Button>
      </Link>
    </main>
  );
}
