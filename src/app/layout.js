
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";
import Providers from "@/lib/Providers";


// Fetch locale and messages on the server side
export default async function RootLayout({ children }) {
  const locale = getLocale();  // Retrieve the user's locale
  const messages = await getMessages(locale);  // Fetch messages based on locale

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Pantagonostis</title>
      </head>
      <body className="antialiased font-Inter">
        {/* Internationalization wrapper */}
        <Providers>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          
          {/* Render children (page content) */}
          <div>{children}</div>
          
          <Footer />
        </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
