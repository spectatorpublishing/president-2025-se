import React, {useState} from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import { sections } from '../data/sections';
import { HashLink } from 'react-router-hash-link';
import "./MobileNavigation.css"

const NavWrap = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 1rem;
    height:6vh;
    justify-content: space-between;
    align-items:center;
    display:flex;
    left:0;
    flex-wrap: wrap;
    z-index:100;
    background-color:#424242;
    a {
        padding: 0.5rem 0rem;
    }
`;

const Navigation = styled.div`
    @media (min-width: 769px) {
       display:none;
    } 
    z-index:100;
    position:sticky;
    top:0;
`

const Tab = styled.div`
    background-color:${props => props.current ? "#424242" : "inherit"};
    color:${props => props.current ? "white" : "rgba(256, 256, 256, 0.6)"};
    padding: 0.55rem;
`;
const Logo = styled.div`
    text-align:center;
    top:0;
    width:100%;
    background-color:#424242;
`;

const LogoImage = styled.img`
    width:25%;
    padding-bottom:1rem;
`
const Title = styled.h1`
    font-family:"Montserrat";
    font-weight:600;
    position:relative;
    background-color:#424242;
    color:white;
    font-size:1.2rem;
    padding:1rem 1rem;
    padding-top:0rem;
    margin:0;
    text-align:center;
`

const MobileNavigation = () => {
    const [open, setOpen] = React.useState(false);
    const [current, setCurrent] = useState("/#");

    function handleClick() {
        setOpen(!open)
    
    }
    function set(section) {
        setCurrent(section)
        setOpen(!open)
    }

    return (
        <Navigation>
            <NavWrap open={open}>
                <HamburgerMenu
                    isOpen={open}
                    menuClicked={() => handleClick()}
                    width={30}
                    height={20}
                    strokeWidth={2.8}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                    zIndex={0}
                    className="over"
                />
                
                <Menu isOpen={open} width={'100vw'}>
                    {sections.map((section, index) => (
                        <HashLink smooth to={section.url} onClick = {()=>set(section.url)} style={{textDecoration:'none'}}>
                            <Tab current = {current === section.url} key={index}>{section.title}</Tab>
                        </HashLink>
                    ))}
                </Menu>
            </NavWrap>
            <Logo>
            <a href="https://www.columbiaspectator.com/" style={{textDecoration:'none'}}><LogoImage alt="Columbia Spectator Crown" style={{
                width:"14rem",
            }} src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png"></LogoImage></a>
            </Logo>
            <Title>Special Coverage | Columbia's 20th President</Title>
        </Navigation>
    );
};

export default MobileNavigation;