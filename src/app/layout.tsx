import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import ThemeProvider from "./components/Header/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luan Ribeiro Dev",
  description: "Portfolio with Luan Ribeiro's projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
