import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'
import { size } from '../device';

const Container = styled.div`
    width: 100%;
    background-color: #F8F4EF;
    color: #424242;
    position:relative;
    margin-top:50rem;
    margin-bottom:0;
    bottom:0;
    @media only screen and (max-width:${size.tablet}){
        margin-top:55rem;
    }
`;

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Header = styled.h1`
    text-align: center;
    width: 70%;
    font-size: 2.2rem;
    font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
    padding-top:2rem;
    @media only screen and (max-width: 1216px){
        width: 68%;
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 768px){
        width: 80%;
        font-size: 1.5rem;
    }
    @media only screen and (max-width: 600px){
        font-weight: 400;
        font-size: 1.3rem;
        padding-top:5rem;
    }
`;

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content:space-around;
    width: 100%;
    height: 100rem;
    margin-top: 2rem;
    @media only screen and (max-width: 1216px){
        height: 115rem;
    }
    @media only screen and (max-width: 1024px){
        height: 80rem;
        width: 78%;
        margin:auto;
        margin-top:2rem;
    }
    @media only screen and (max-width: 768px){
        display: block;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: none;
        height: fit-content;
        margin-top:2rem;
    }  
`;

const Section = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    width: 22rem;
    height: fit-content;
    margin-bottom: 2rem;
    padding:0;
    margin:0;
    font-family:  'IBM Plex Serif', 'Georgia', Times, serif;
    @media only screen and (max-width: 1216px){
        font-size: 1.6rem;
        width: 16rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 1.4rem;
        width: 14rem;
    }
    @media only screen and (max-width: 768px){
        font-size: 1.5rem;
        text-align: center;
        width: 100%;
    }
    @media only screen and (max-width: 600px){
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
    }
`;

const Name = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 1.15rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 1216px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 0.8rem;
    }
    @media only screen and (max-width: 768px){
        font-size:1rem;
    }
`;

const Hr = styled.hr`
  border: 1px solid #424242;
  margin:0;
  padding:0;
  opacity:0.8;
`

const Credits = () => {
    return (
        <Container id="credits">
            <Hr/>
            <HeaderDiv><Header>THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE</Header></HeaderDiv>
            <SectAndNames>
                {Object.entries(credits).map(([section, key]) => {
                    return(
                        <Section> {section} 
                        <br/>
                        {key.map((person, index) => {
                            return(
                                <Name key={index}>{person.staff_name}, {person.title}</Name>
                            );
                        })}
                        <br/>
                        </Section>
                    );
                })}
            </SectAndNames>
        </Container>
    )
};

export default Credits;