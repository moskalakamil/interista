import Articles from "./../components/landing/Articles/Index";
import Matches from "@/components/landing/Matches";
import Head from "next/head";
import Header from "@/components/landing/Header/Index";
import Hero from "@/components/landing/Hero/Index";
import Footer from "@/components/common/Footer/Index";
import { Post } from "@/types/posts";
import { getStaticPaths } from "./[ArticleId]";
import { getPosts } from "./api/post/getPosts";

interface Props {
  articles: Post[];
}

export default function Home({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_black.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
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

export const getStaticProps = async () => {
  const articles = await getPosts();

  console.log(articles);
  return { props: { articles } };
};
