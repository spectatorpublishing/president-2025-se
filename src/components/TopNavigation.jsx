import React from 'react';
import styled from 'styled-components';
import { sections } from '../data/sections';
import { size } from '../device';

const NavContainer = styled.div`
    width: 100%;
    background-color: #002761; /* Dark Blue */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

const TopBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 1200px;
    margin-bottom: 1.5rem;
    text-align: center;
`;

const LogoContainer = styled.div`
    margin-bottom: 1rem;
`;

const LogoImage = styled.img`
    height: 30px;
    width: auto;
    
    @media (max-width: ${size.mobile}) {
        height: 10px;
    }
`;

const SubTitle = styled.h2`
    font-family: "Source Serif Pro", serif;
    font-size: 1.75rem;
    font-weight: 400;
    margin: 0;
    color: white;
    
    @media (max-width: ${size.tablet}) {
        font-size: 1.5rem;
    }
    
    @media (max-width: ${size.mobile}) {
        font-size: 1.2rem;
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
    font-family: "Source Serif Pro", serif;
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
    
    &:hover {
        text-decoration: underline;
    }
`;

const TopNavigation = () => {
    return (
        <NavContainer>
            <TopBar>
                <LogoContainer>
                    <LogoImage src="/ColumbiaDailySpectatorMasthead.png" alt="Columbia Spectator" />
                </LogoContainer>
                <SubTitle>Special Coverage | Five Presidents, Four Years</SubTitle>
            </TopBar>
            <LinksContainer>
                {sections.map((section, index) => (
                    <NavLink key={index} href={section.url}>
                        {section.title}
                    </NavLink>
                ))}
            </LinksContainer>
        </NavContainer>
    );
};

export default TopNavigation;