import React from "react";
import Ads from "./Ads";
import Author from "./Author";
import LastArticles from "./LastArticles";

const Aside = () => {
  return (
    <>
      <Author />
      <LastArticles />
      <Ads />
    </>
  );
};

export default Aside;
