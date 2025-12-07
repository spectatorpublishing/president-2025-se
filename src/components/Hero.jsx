import React from 'react';
import styled from 'styled-components';
import { size } from '../device';

const HeroContainer = styled.div`
    background-color: #002B5C;
    color: white;
    padding: 4rem 5%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;

    @media (max-width: ${size.tablet}) {
        flex-direction: column;
        padding: 2rem 5%;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
`;

const HeroImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border: 1px solid white; /* Optional border based on design feel */
`;

const ImageCaption = styled.p`
    font-family: "Source Serif Pro", serif;
    font-style: italic;
    font-size: 1rem;
    margin-top: 0.5rem;
    color: #ddd;
`;

const TextContainer = styled.div`
    flex: 1;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 7rem;

    @media (max-width: ${size.tablet}) {
        padding-top: 0;
        text-align: center;
    }
`;

const Title = styled.h1`
    font-family: "Source Serif Pro", serif;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;

    a {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Byline = styled.p`
    font-family: "Source Serif Pro", sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    margin-top: 1rem;
    color: #ccc;
`;

const Hero = ({ article }) => {
    if (!article) return null;

    return (
        <HeroContainer>
            <ImageContainer>
                <a href={article.link}>
                    <HeroImage src={article.img} alt={article.title} />
                </a>
                <ImageCaption>
                    {/* Placeholder caption since data might not have it, or use title as caption fallback */}
                    Nemat "Minouche" Shafik will serve as Columbia's 20th President, the University announced Wednesday morning, marking the first time in the institution's 269-year history that a woman or a person of color will hold the top post.
                </ImageCaption>
            </ImageContainer>
            <TextContainer>
                <Title>
                    <a href={article.link}>{article.title}</a>
                </Title>
                <Byline>By {article.author}</Byline>
            </TextContainer>
        </HeroContainer>
    );
};

export default Hero;
