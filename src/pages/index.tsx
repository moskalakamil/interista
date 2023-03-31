import Articles from "./../components/landing/Articles/Index";
import Matches from "@/components/landing/Matches";
import Head from "next/head";
import Header from "@/components/common/Header/Index";
import Hero from "@/components/landing/Hero/Index";
import Footer from "@/components/common/Footer/Index";
import { Post } from "@/types/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getStaticPaths } from "./[ArticleId]";
import { getPosts } from "./api/post/getPosts";

interface Props {
  articles: Post[];
}

export default function Home({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Tutaj jest nasza strona</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_black.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero articleName="Lorem ipsum rata tata  sg" articleId={2} />
        <Articles articles={articles} />
        <Matches />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  const articles = await getPosts();

  return {
    props: { articles, ...(await serverSideTranslations(locale, ["common"])) },
  };
};
