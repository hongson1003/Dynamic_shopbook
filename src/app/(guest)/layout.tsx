// RootLayout.js
import Header from '@/containers/Header';
import Menu from '@/containers/Menu';
// import Menu
import ProModal from '@/components/BannerModal';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';
import ScrollSticky from '@/components/ScrollSticky';
import Footer from '@/containers/Footer';

export const metadata: Metadata = {
  title: 'Shop - Book Store',
  description:
    'Shop - Book Store is a fictional e-commerce website that connect with Zalo mini app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="root" className="flex min-h-screen flex-col">
      <div id="header" className="inset-x-0 top-0 z-50">
        <Header />
        <ScrollSticky childId="header" height={150} />
      </div>
      <div className="hidden md:block">
        <Menu />
      </div>
      <main className="flex-grow md:py-2">{children}</main>
      <ProModal />
      <div id="footer" className="inset-x-0 bottom-0 z-0">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}
