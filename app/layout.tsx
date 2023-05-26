import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

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
      <Script src="//at.alicdn.com/t/c/font_4086257_hwzs5pw5tol.js"></Script>
      <body className={`${inter.className} min-h-screen bg-blue-300`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
