import type { Metadata } from "next";
import ProductPage from "./ProductPage";

export const metadata: Metadata = {
  title: "FORMA CLI — A visual coding agent for your terminal",
  description: "Meet FORMA CLI: a terminal coding agent with a permissioned browser and screenshot-trained UI/UX audits. Inspect pages, change code, and verify the result.",
};

export default function Home() {
  return <ProductPage product="cli" />;
}
