import type { Metadata } from "next";
import { Geist, Geist_Mono,Anonymous_Pro, Geologica } from "next/font/google";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-anonymous-pro',
  display: 'swap'
})

const geologica = Geologica({
  subsets: ['latin'],  
  style: ['normal'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-geologica',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default : "Onhaus Studio",
    template : "%s | Onhaus Studio"
  },
  description: "We clearly build in our house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center ">
        {/* Header */}
        <Navbar>
          
        </Navbar>

        <main className="bg-black">
          {children}
        </main>

        {/* Footer */}
        <Footer>

        </Footer>
      </body>
    </html>
  );
}
