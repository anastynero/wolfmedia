import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import './global.css';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:title" content="Wolfmedia"/>
        <meta property="og:description" content="«Wolfmedia» – это редакция, где ежедневно 
        авторы, иллюстраторы, дизайнеры, видеографы, создают уникальный контент и доносят его 
        до огромной аудитории с помощью социальных сетей."/>
        <meta property="og:image" content="/og-image.png" />
        <title>Wolfmedia</title>
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
