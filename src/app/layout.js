import "./globals.css";
import { Roboto } from "next/font/google";
import { Nunito_Sans } from 'next/font/google'

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto'
});

const nunito_sans_init = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-nunito_sans'
});

export const metadata = {
  title: "Woo Commerce",
  description: "WooCommerce is the open-source ecommerce platform that helps merchants and developers build successful businesses for the long term.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${nunito_sans_init.variable} `}>{children}</body>
    </html>
  );
}
