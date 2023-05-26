import { SvgIcon, Button, PageHeader } from '@/components/common';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gblue-light">
      <PageHeader svg={<SvgIcon href="mascara-copy"></SvgIcon>}>
        Select the type of data you would <br /> like to train your model with
      </PageHeader>

      <Link href="/pages/query2">
        <Button>Next</Button>
      </Link>
    </main>
  );
}
