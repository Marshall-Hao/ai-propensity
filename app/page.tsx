import { SvgIcon, PingDiv } from '@/components/common';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gblue-light">
      <div className=" -mt-5 flex flex-col gap-y-12">
        <PingDiv>
          <SvgIcon href="lipstick"></SvgIcon>
        </PingDiv>
        <PingDiv>
          <SvgIcon href="mirror"></SvgIcon>
        </PingDiv>
        <PingDiv>
          <SvgIcon href="mascara"></SvgIcon>
        </PingDiv>
      </div>

      <section className="mb-72 mt-24 text-center">
        <h3 className="text-5xl	">Welcome to</h3>
        <h1 className="mx-auto mb-12 mt-5	max-w-2xl text-7xl leading-tight">
          AI Propensity Model Simulator
        </h1>
        <p className="max-w-2xl text-2xl">
          Learn how propensity model works and
          <br /> discover new customer segments for your business!
        </p>
      </section>

      <div className="h-48 w-48  rounded-full border-8 border-white px-9 py-8">
        <SvgIcon animate="animate-pulse" href="right_arrow"></SvgIcon>
      </div>
    </main>
  );
}
