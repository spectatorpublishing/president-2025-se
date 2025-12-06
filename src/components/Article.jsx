import React from "react";
import NormalArticle from "./NormalArticle";

const Article = ({ article, textColor }) => {
  // Simplified to always use NormalArticle which will be our responsive card
  return <NormalArticle article={article} textColor={textColor} />;
};
export default Article;
