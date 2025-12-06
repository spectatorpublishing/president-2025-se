import React from "react";
import SectionTitle from "../components/SectionTitle";
import Article from "../components/Article"
import styled from "styled-components"
import { size } from "../device";

const SectionsWrapper = styled.div`
  position:relative;
  top:36rem;
  width:78%;
  padding-left:18%;
  margin-bottom:0;
  @media (max-width:1000px) {
    top:40rem;
  }
  @media (max-width:${size.tablet}) {
    width:100%; 
    padding-left:0%;
    top:51rem;
  }
  @media (max-width:380px) {
    top:52rem;
  }
  bottom:0;
`

const Title = styled.h1`
  font-family:'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  text-transform: capitalize;
  color: #424242;
  @media (max-width:${size.tablet}) {
    text-align:center;
    font-size: 1.45rem;
    margin:0.5rem;
  }
`

const Header = styled.div`
  position:absolute;
  width:78%;
  padding-left:18%;
  @media (max-width:${size.tablet}) {
    width:100%; 
    padding-left:0%;
    margin-top:2rem;
  }
  margin-top:3rem;
  top:10rem;
`

const Image = styled.img`
  width:40rem;
  height:auto;
  margin-left:1rem;
  margin-top:3rem;
  box-shadow: 2px 2px 10px rgba(115, 115, 115, 0.9);

  @media (max-width:900px) {
    width:92%;
  }

  @media (max-width:${size.tablet}) {
    display:block;
    width:85%;
    margin:3rem 2rem; 
  }
`
const Hr = styled.hr`
  border: 1px solid #424242;
  margin:0;
  padding:0;
  opacity:0.8;
`
const Section = styled.div`
  height:5rem;
  @media (max-width:${size.tablet}) {
    display:none;
  }
`

const ArticleText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color:#424242;
  flex: none;
  order: 1;
  margin-left:1rem;
  margin-top:1rem;
  opacity:0.95;
  @media (max-width:1000px)  {
    margin-top:1.5rem;
  }
  @media (max-width:${size.tablet})  {
    padding:0rem 1rem;
  }
`;

const Description = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 1rem;
  line-height: 38px;
  flex: none;
  order: 0;
  margin: 8px 0px;
  font-style: italic;
  @media (min-width:1000px)  {
    width:85%;
  }
`;

const Author = styled.p`
  font-family: 'EB Garamond', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 29px;
  flex: none;
  order: 1;
  margin: 20px 0px 0px 0px;
`;

const WritingSection = ({ title, articles, linePosition }) => {
  return (
    <div>
    <a href="https://www.columbiaspectator.com/news/2023/01/18/nemat-minouche-shafik-to-lead-columbia-as-20th-university-president/" style={{textDecoration:'none', cursor:'pointer'}}>
    <Header>
      <Title>Nemat ‘Minouche’ Shafik to lead Columbia as 20th University President</Title>
      <Hr/>
      <Image src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/XYLHK2ST4JHLTKDB3JORMYLL7Q.jpg"/>
      <ArticleText>
          <Description>Nemat “Minouche” Shafik will serve as Columbia’s 20th President, the University announced Wednesday morning, marking the first time in the institution’s 269-year history that a woman or a person of color will hold the top post.</Description>
          <Author>By: Esha Karam and Isabella Ramírez</Author>
        </ArticleText>
    </Header>
    </a>

    <SectionsWrapper>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a id={title} style={{ "text-decoration": "none" }}>
      <Section/>
      <SectionTitle title={title} linePosition={linePosition} />
      </a>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </SectionsWrapper>
    </div>
  );
};

export default WritingSection;
