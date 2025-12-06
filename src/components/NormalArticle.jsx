import React from "react";
import styled from "styled-components";
import { size } from "../device";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 3/2;
  background-color: #ccc; /* Placeholder gray */
  overflow: hidden;
  margin-bottom: 1rem;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: ${props => props.textColor || '#424242'};
  line-height: 1.4;
`;

const Byline = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0;
  color: ${props => props.textColor ? props.textColor : '#666'};
  opacity: 0.8;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const NormalArticle = ({ article, textColor }) => {
  return (
    <CardContainer>
      <Link href={article.link} target="_blank" rel="noreferrer">
        <ImageContainer>
          {article.img && <ArticleImage src={article.img} alt={article.title} />}
        </ImageContainer>
        <TextContainer>
          <Title textColor={textColor}>{article.title}</Title>
          <Byline textColor={textColor}>By {article.author}</Byline>
        </TextContainer>
      </Link>
    </CardContainer>
  );
};

export default NormalArticle;
