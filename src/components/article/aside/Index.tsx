import React from "react";
import Ads from "./Ads";
import Author from "./Author";
import LastArticles from "./LastArticles";
interface Props {
  author: {
    id: string;
    name: string;
    email: string;
  };
}
const Aside = ({ author }: Props) => {
  console.log(author);
  return (
    <>
      <Author author={author} />
      <LastArticles />
      <Ads />
    </>
  );
};

export default Aside;
