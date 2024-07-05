// RootLayout.js
import Fire from '@/components/Fire';
import NextProgressBarWrapper from '@/config/next/nextProgressBarWrapper';
import QueryClientProviderWrapper from '@/config/next/queryClientProviderWrapper';
import ReduxProviderWrapper from '@/config/next/reduxProviderWrapper';
import '@/css/tailwind.css';
import type { Metadata } from 'next';
import 'react-loading-skeleton/dist/skeleton.css';

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
              <Fire>
                {children}
              </Fire>
            </ReduxProviderWrapper>
          </QueryClientProviderWrapper>
        </NextProgressBarWrapper>
      </body>
    </html>
  );
}
