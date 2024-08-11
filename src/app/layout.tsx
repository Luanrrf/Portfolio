import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import ThemeProvider from "./components/Header/theme/ThemeProvider";
import { PageProvider } from "./context/PageContext";
import { cookies } from "next/headers";

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
  
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value ?? "pt-br";
  const messages = JSON.parse(cookieStore.get("messages")?.value ?? "") ?? {};

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <PageProvider lang={lang} messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </PageProvider>
      </body>
    </html>
  );
}
