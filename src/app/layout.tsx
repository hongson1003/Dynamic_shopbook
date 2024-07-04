// RootLayout.js
import NextProgressBarWrapper from '@/config/next/nextProgressBarWrapper';
import type { Metadata } from 'next';
import '@/css/tailwind.css';
import QueryClientProviderWrapper from '@/config/next/queryClientProviderWrapper';
import ReduxProviderWrapper from '@/config/next/reduxProviderWrapper';
import 'react-loading-skeleton/dist/skeleton.css';
import Fire from '@/components/Fire';

export const metadata: Metadata = {
  title: 'Shop - Book Store',
  description:
    'Shop - Book Store is a fictional e-commerce website that sells books.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextProgressBarWrapper>
          <QueryClientProviderWrapper>
            <ReduxProviderWrapper>
              <Fire>{children}</Fire>
            </ReduxProviderWrapper>
          </QueryClientProviderWrapper>
        </NextProgressBarWrapper>
      </body>
    </html>
  );
}
