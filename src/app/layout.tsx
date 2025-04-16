import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import './global.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "Wolfmedia",
  description: "«Wolfmedia» – это редакция, где ежедневно авторы, иллюстраторы, дизайнеры, видеографы, создают уникальный контент и доносят его до огромной аудитории с помощью социальных сетей.",
  openGraph: {
    images: [
      {
        url: 'http://localhost:3000/img/logo-light.svg', 
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="ru">
      <body>
        <Header/>
          <Providers>
        <main className="container">{children}</main>
          </Providers>
        <Footer/>
      </body>
    </html>
  );
}
