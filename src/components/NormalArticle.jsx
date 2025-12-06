import React from "react";
import styled from "styled-components";
import { size } from "../device";

const ArticleWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 19vw;
  margin: 2.25vw;
  flex-grow: 1;
  display: inline-block;
  vertical-align: top;

  @media (max-width:${size.tablet}) {
    width: 45%;
  }
  @media (max-width:${size.mobile}) {
    width: 95vw;
  }
`;

const Link = styled.a`
  text-decoration: none;
  width: inherit;
`;

const ArticleImg = styled.img`
  order: 0;
  margin: 24px 0px;
  position: static;
  width: 20vw;
  height: 14vw;
  object-fit:cover;
  left: 8px;
  top: 8px;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);

  @media (max-width:${size.tablet})  {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 32vw;
    margin-bottom:0.5rem;
    border-radius: 0;
  }

  @media (max-width:${size.mobile})  {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 65vw;
    margin-bottom:0.5rem;
    border-radius: 0;
  }
`;

const ArticleText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color:#424242;
  flex: none;
  order: 1;
  margin: 12px 0px;
  @media (max-width:${size.tablet})  {
    padding:0rem 1rem;
  }
`;

const Title = styled.p`
  font-family: 'EB Garamond', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 38px;
  flex: none;
  order: 0;
  margin: 8px 0px;
`;

const Author = styled.p`
  font-family: 'EB Garamond', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 29px;
  flex: none;
  order: 1;
  margin: 8px 0px;
`;

const NormalArticle = ({ article }) => {
  return (
    <ArticleWrap>
      <Link href={article.link} target="_blank" rel="noreferrer">
        <ArticleImg src={article.img} />
        <ArticleText>
          <Title>{article.title}</Title>
          <Author>By: {article.author}</Author>
        </ArticleText>
      </Link>
    </ArticleWrap>
  );
};

export default NormalArticle;
