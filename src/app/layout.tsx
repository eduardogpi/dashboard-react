import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teste 1",
  
};

export default function OutroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-800">
          <div className="w-100 h-100 flex justify-center items-center">     
            {children}
          </div>
      </body>
    </html>
  );
}