import type { Metadata } from "next";
import ProductPage from "./ProductPage";

export const metadata: Metadata = {
  title: "FORMA CLI — A visual coding agent for your terminal",
  description: "Pair your coding model with a permissioned browser and FORMA’s screenshot-trained UI/UX auditor.",
};

export default function Home() {
  return <ProductPage product="cli" />;
}
