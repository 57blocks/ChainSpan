import type { Metadata } from "next";
import WalletProvider from "@/wagmi/walletProvider";
import './globals.css'
import MaterialTailwindThemeProvider from "@/materialTailwind/ThemeProvider";
import { StickyNavbar } from "@/components/Nav";
import Icon from '@/../public/images/icon.png'
import { FooterWithLogo } from "@/components/Footer";

export const metadata: Metadata = {
  title: "ChainSpan",
  icons: [Icon.src]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <MaterialTailwindThemeProvider>
            <StickyNavbar />
            {children}
            <FooterWithLogo />
          </MaterialTailwindThemeProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
