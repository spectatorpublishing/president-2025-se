import React, { useState } from "react";
import styled from "styled-components";
import { size } from "../device";
import { sections } from "../data/sections";
import { HashLink } from 'react-router-hash-link';

const NavBody = styled.div`
  font-family:'Montserrat';
  margin-top:5rem;
  background-position: left;
  z-index:100;
  background-color:#99958F;
  width: min-content;
  height: min-content;
  padding:1.2rem;
  position: sticky;
  top: 6.25rem;
  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const NavSection = styled.div`
  font-size: 1.1rem;
  line-height: 1.85em;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.current ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)'};
  :hover {
    color:rgba(255, 255, 255, 0.85);
  }
`;
const Title = styled.h1`
    font-family:"Montserrat";
    z-index:100;
    font-weight:600;
    background-color:#424242;
    color:white;
    font-size:1.5rem;
    padding:2rem;
    margin:0;
    text-align:center;
    font-size:1.85rem;
    top:0;
    position:sticky;
    @media (max-width: ${size.tablet}) {
    display: none;
  }
`
const Logo = styled.div`
    z-index:100;
    text-align:center;
    top:0;
    width:100%;
    background-color:#424242;
    padding:0;
    @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const LogoImage = styled.img`
    width:30%;
    padding-top:2rem;
    padding-bottom:0rem;
`

const Navigation = () => {
  const [current, setCurrent] = useState("/#")
  return (
    <>
     <Logo>
        <a href="https://www.columbiaspectator.com/" style={{textDecoration:'none'}}><LogoImage alt="Columbia Spectator Crown" style={{
          width:"14rem",
        }} src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png"></LogoImage></a>
      </Logo>
      <Title>Special Coverage | Columbia's 20th President</Title>
      <NavBody>
        {sections.map((section, index) => (
             <HashLink smooth to={section.url} exact={section.exact} style={{textDecoration:'none'}}>
                <NavSection current = {current === section.url} onClick = {()=>setCurrent(section.url)} key={index}>
                  {section.title}
                </NavSection>
             </HashLink>
        ))}
      </NavBody>
    </>
  );
};

export default Navigation;
