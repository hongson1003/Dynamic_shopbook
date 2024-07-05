// RootLayout.js
import Header from '@/containers/Header';
import Menu from '@/containers/Menu';
// import Menu
import ProModal from '@/components/BannerModal';
import ScrollToTop from '@/components/ScrollToTop';
import '@/css/global.css';
import type { Metadata } from 'next';

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
    <div id="root" className="flex min-h-screen flex-col">
      <Header />
      <div className="hidden md:block">
        <Menu />
      </div>
      <main className="flex-grow py-2">{children}</main>
      <ProModal />
      <ScrollToTop />
    </div>
  );
}
