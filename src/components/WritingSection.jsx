import React from "react";
import Article from "../components/Article"
import styled from "styled-components"
import { size } from "../device";

const SectionContainer = styled.div`
  width: 100%;
  background-color: ${props => props.backgroundColor || 'white'};
  color: ${props => props.textColor || '#424242'};
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
`;

const Title = styled.h1`
  font-family: 'Georgia', serif;
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  color: inherit;
  margin-bottom: 2rem;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid ${props => props.textColor === 'white' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)'};
  padding-bottom: 1rem;

  @media (max-width:${size.tablet}) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: ${size.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const WritingSection = ({ title, articles, backgroundColor, textColor }) => {
  return (
    <SectionContainer backgroundColor={backgroundColor} textColor={textColor} id={title.toLowerCase()}>
      <ContentWrapper>
        <Title textColor={textColor}>{title}</Title>
        <Grid>
          {articles.map((article, index) => (
            <Article key={index} article={article} textColor={textColor} />
          ))}
        </Grid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default WritingSection;
