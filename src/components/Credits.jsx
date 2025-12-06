import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'
import { size } from '../device';

const Container = styled.div`
    width: 100%;
    background-color: #002B5C;
    color: white;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h1`
    text-align: center;
    width: 80%;
    font-size: 2rem;
    font-family: 'Georgia', serif;
    margin-bottom: 3rem;
    text-transform: uppercase;
    
    @media (max-width: ${size.tablet}) {
        font-size: 1.5rem;
    }
`;

const CreditsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 90%;
    max-width: 1200px;

    @media (max-width: ${size.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${size.mobile}) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

const Section = styled.div`
    margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
    font-family: 'Georgia', serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
`;

const Name = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #ddd;
`;

const Credits = () => {
    return (
        <Container id="credits">
            <Header>The Columbia Daily Spectator Staff Who Made This Issue Possible</Header>
            <CreditsGrid>
                {Object.entries(credits).map(([section, people]) => (
                    <Section key={section}>
                        <SectionTitle>{section}</SectionTitle>
                        {people.map((person, index) => (
                            <Name key={index}>{person.staff_name}, {person.title}</Name>
                        ))}
                    </Section>
                ))}
            </CreditsGrid>
        </Container>
    )
};

export default Credits;