import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "swiper/css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEHATI",
  description: "Aplikasi monitoring tumbuh kembang",
};

const mainFont = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${mainFont.className} bg-neutral-50 leading-tight antialiased`}
      >
        <div className="mx-auto max-w-md">{children}</div>
      </body>
    </html>
  );
}
