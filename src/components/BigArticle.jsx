import React from "react";
import styled from "styled-components";

const ArticleWrap = styled.div`
  height: 601.82px;
  left: 0px;
  display: flex;
  top: 0px;
  filter: drop-shadow(6.1435px 6.1435px 14.9199px rgba(0, 0, 0, 0.25));
  border-radius: 43.8822px;
  margin-left: 2%;
`;

const Link = styled.a`
  text-decoration: none;
  width: inherit;
`;

const ArticleImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 43.8822px;
`;

const ArticleText = styled.div`
  position: absolute;
  width: 100%;
  height: 180.91px;
  left: 49.09px;
  top: 380.91px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 86px;

  color: #ffffff;

  text-shadow: 5.26586px 5.26586px 3.51057px rgba(0, 0, 0, 0.4);
`;

const Title = styled.p`
  width: 85%;
  height: 180.91px;
  left: 49.09px;
  top: 300.91px;
  margin-${(prop) => prop.type}: 2%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 70px;

  color: #ffffff;

  text-shadow: 5.26586px 5.26586px 3.51057px rgba(0, 0, 0, 0.4);
`;

const VerticalText = styled.div`
  writing-mode: vertical-rl;
  position: relative;
  ${(prop) => (prop.type === "left" ? "right" : "left")}: 2%;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  /* Blue 03 */
  color: #1c7aa7;
`;
const Vertical = styled.div`
  border-left: 6px solid black;
  position: absolute;
  left: 40%;
  height: ${(prop) => 600 - prop.top * 25}px;

  top: ${(prop) => prop.top * 3.8}%;
`;
const BigArticle = ({ article }) => {
  return (
    <ArticleWrap type={article.type}>
      <VerticalText
        style={{ display: article.type === "right" ? "none" : "visible" }}
        type={article.type}
      >
        {article.author} <Vertical top={article.author.length} />
      </VerticalText>
      <Link
        href={article.link}
        target="_blank"
        rel="noreferrer"
        style={{ float: article.type === "right" ? "" : "right" }}
      >
        <ArticleImg src={article.img} />
        <ArticleText>
          <Title type={article.type}>{article.title}</Title>
        </ArticleText>
      </Link>
      <VerticalText
        style={{ display: article.type === "right" ? "visible " : "none" }}
        type={article.type}
      >
        {article.author} <Vertical top={article.author.length} />
      </VerticalText>
    </ArticleWrap>
  );
};

export default BigArticle;
