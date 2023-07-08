import Image from "next/image";
import Layout from "./components/layouts/layout/layout";
import Hero from "./components/molecules/Hero/hero";
import heroImage from "../app/static/image/placeholder.png";

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
