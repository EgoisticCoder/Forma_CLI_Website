import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "FORMA CLI",
  description: "A visual coding agent for your terminal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
