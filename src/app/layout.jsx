import SiteFooter from '@/components/SiteFooter';
import SiteNavbar from '@/components/SiteNavbar';
import { Mulish } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
const ubuntuFont = Mulish({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'METROMAX',
  description: 'DESIGN AND DEVELOPMENT LIMITED',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{ubuntuFont.styles}</style>
        <link rel="icon" href="favicon.png" />
      </head>
      <body className={ubuntuFont.className}>
        <SiteNavbar />
        <NextTopLoader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
