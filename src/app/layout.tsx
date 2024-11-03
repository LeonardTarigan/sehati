import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEHATI",
  description: "Aplikasi monitoring tumbuh kembang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`antialiased`}>
        <div className="max-w-md mx-auto">{children}</div>
      </body>
    </html>
  );
}
