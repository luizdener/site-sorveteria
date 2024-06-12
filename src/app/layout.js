import "./globals.css";

import Topo from "@/components/topo";
import Rodape from "@/components/rodape";

export const metadata = {
  title: "Gelateria",
  description: "Gelateria desenvolvida para DevMedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
