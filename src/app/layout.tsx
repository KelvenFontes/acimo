import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: "Acimo - Associação de Idosos do Município de Osasco",
  description: "Acimo - Associação de Idosos do Município de Osasco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className} >
        {children}
      </body>
    </html>
  );
}
