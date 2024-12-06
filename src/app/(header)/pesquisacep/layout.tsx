import type { Metadata } from "next";
import "../../globals.css";

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
      <body className="bg-zinc-900">
          <div className="w-full h-dvh flex justify-center items-start p-4">     
            {children}
          </div>
      </body>
    </html>
  );
}