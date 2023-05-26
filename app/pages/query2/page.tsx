import { SvgIcon, Button, PageHeader } from '@/components/common';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gblue-light">
      <PageHeader svg={<SvgIcon href="mirror-copy"></SvgIcon>}>
        How would you like to <br /> train your model?
      </PageHeader>

      <Link href="/pages/query2">
        <Button>Next</Button>
      </Link>

      <div className="mt-28">
        <div className="h-[426px] w-[930px] bg-gblue-normal"></div>
      </div>
    </main>
  );
}
