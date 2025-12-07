import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 3/2;
  background-color: #c4c4c4;
  overflow: hidden;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-family: 'Source Serif Pro', serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: #1a1a1a;
  line-height: 1.4;
`;

const Byline = styled.p`
  font-family: "Source Serif Pro", serif;
  font-size: 0.875rem;
  margin: 0;
  color: #666;
`;

const NormalArticle = ({ article }) => {
  return (
    <CardContainer>
      <Link href={article.link} target="_blank" rel="noreferrer">
        <ImageContainer>
          {article.img && <ArticleImage src={article.img} alt={article.title} />}
        </ImageContainer>
        <TextContainer>
          <Title>{article.title}</Title>
          <Byline>By {article.author}</Byline>
        </TextContainer>
      </Link>
    </CardContainer>
  );
};

export default NormalArticle; 