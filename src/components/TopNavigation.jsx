import React from 'react';
import styled from 'styled-components';
import { sections } from '../data/sections';
import { size } from '../device';

const NavContainer = styled.div`
    width: 100%;
    background-color: #002B5C; /* Dark Blue */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.5rem;

    @media (max-width: ${size.tablet}) {
        flex-direction: column;
        text-align: center;
    }
`;

const Logo = styled.h1`
    font-family: 'Trajan Pro', serif; /* Assuming a serif font for logo */
    font-size: 1.5rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const SubTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    
    @media (max-width: ${size.tablet}) {
        margin-top: 0.5rem;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    
    @media (max-width: ${size.mobile}) {
        gap: 1rem;
        flex-wrap: wrap;
    }
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    
    &:hover {
        text-decoration: underline;
    }
`;

const TopNavigation = () => {
    return (
        <NavContainer>
            <TopBar>
                <Logo>Columbia Spectator</Logo>
                <SubTitle>Special Coverage | Columbia's 21st President</SubTitle>
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
