import Articles from "./../components/landing/Articles/Index";
import Matches from "@/components/landing/Matches";
import Head from "next/head";
import Header from "@/components/landing/Header/Index";
import Hero from "@/components/landing/Hero/Index";
import Footer from "@/components/common/Footer/Index";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero articleName="Lorem ipsum rata tata  sg" articleId={2} />
      <Articles />
      <Matches />
      <Footer />
    </main>
  );
}
