import './globals.css';
import localFont from 'next/font/local';
import Script from 'next/script';
import Layout from '@/components/Layout';

const googleSans = localFont({ src: '../public/GoogleSans/Regular.ttf' });

export const metadata = {
  title: 'AI Propensity Model Simulator ',
  description: 'A Application for AI Propensity Model Simulator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="//at.alicdn.com/t/c/font_4086257_eu9vpmxm9r5.js"></Script>
      <body
        className={`${googleSans.className} min-h-screen overflow-hidden bg-blue-300`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
