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
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta property="og:title" content="Wolfmedia"/>
      <meta property="og:description" content="«Wolfmedia» – это редакция, где ежедневно авторы, иллюстраторы, дизайнеры, видеографы, создают уникальный контент и доносят его до огромной аудитории с помощью социальных сетей."/>
      <meta property="og:image" content="https://wolfmedia-three.vercel.app/public/img/logo_light.svg"/>
      <meta property="og:locale" content="ru_RU"/>
      <meta property="og:type" content="website"/>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      </head>
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
