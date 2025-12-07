import React from 'react';
import styled from 'styled-components';
import { sections } from '../data/sections';
import { size } from '../device';

const NavContainer = styled.div`
    width: 100%;
    background-color: #002B5C;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
`;

const LogoImg = styled.img`
    height: 3rem;
    margin-bottom: 1.5rem;
    
    @media (max-width: ${size.mobile}) {
        height: 2rem;
    }
`;

const Title = styled.h1`
    font-family: 'Georgia', serif;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0 0 2rem 0;
    text-align: center;
    
    @media (max-width: ${size.tablet}) {
        font-size: 1.8rem;
        padding: 0 1rem;
    }
`;

const NavBar = styled.div`
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    background-color: #002B5C;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    width: 90%;
    max-width: 1200px;
    flex-wrap: wrap;
    
    @media (max-width: ${size.tablet}) {
        gap: 2rem;
    }
    
    @media (max-width: ${size.mobile}) {
        gap: 1rem;
    }
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-family: 'Georgia', serif;
    font-size: 1.1rem;
    font-weight: 600;
    
    &:hover {
        text-decoration: underline;
    }
`;

const TopNavigation = () => {
    return (
        <NavContainer>
            <a href="https://www.columbiaspectator.com">
                <LogoImg src={process.env.PUBLIC_URL + "/spectator-logo.png"} alt="Columbia Spectator" />
            </a>
            <Title>Special Coverage | Columbia's 21st President</Title>
            <NavBar>
                <LinksContainer>
                    {sections.map((section, index) => (
                        <NavLink key={index} href={section.url}>
                            {section.title}
                        </NavLink>
                    ))}
                </LinksContainer>
            </NavBar>
        </NavContainer>
    );
};

export default TopNavigation;
