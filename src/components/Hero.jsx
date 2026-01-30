import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { size } from '../device';

const HeroContainer = styled.div`
    position: relative;
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
    padding-top: 1rem;

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

    @media (max-width: ${size.tablet}) {
        font-size: 1.8rem;
    }

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

const EditorButton = styled.button`
    position: absolute;
    top: 2rem;
    right: 5%;
    background-color: white;
    color: #002B5C;
    border: none;
    border-radius: 25px;
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
    font-family: "Source Serif Pro", serif;
    font-weight: bold;
    cursor: pointer;
    z-index: 10;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: ${size.tablet}) {
        position: static;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    
    animation: ${props => props.closing ? 'fadeOut 0.3s ease-out forwards' : 'fadeIn 0.3s ease-out forwards'};

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;

const ModalContent = styled.div`
    background-color: white;
    color: black;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    position: relative;
    font-family: "Source Serif Pro", serif;
    line-height: 1.6;
    /* transform-origin removed here, set inline dynamically */
    animation: ${props => props.closing ? 'shrinkToButton 0.3s ease-in forwards' : 'expandFromButton 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'};

    /* Hide scrollbar for cleaner look if desired, but functionality is priority */
    
    @keyframes expandFromButton {
        from {
            transform: scale(0.1);
            opacity: 0;
            border-radius: 50%;
        }
        to {
            transform: scale(1);
            opacity: 1;
            border-radius: 0;
        }
    }
    
    @keyframes shrinkToButton {
        from {
            transform: scale(1);
            opacity: 1;
            border-radius: 0;
        }
        to {
            transform: scale(0.1);
            opacity: 0;
            border-radius: 50%;
        }
    }
`;

const ContentWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 2rem;
    
    h2 {
        color: #002B5C;
        margin-bottom: 2rem;
        text-align: center;
        font-size: 2.5rem;
    }
`;

const CloseModalButton = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    color: #333;
    line-height: 1;
    z-index: 1001; /* Ensure close button is above content */
`;

const Hero = ({ article }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [buttonPos, setButtonPos] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    const handleOpen = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        // Calculate the center of the button relative to the viewport
        // This will be used as the transform origin
        setButtonPos({ 
            top: rect.top + rect.height / 2, 
            left: rect.left + rect.width / 2 
        });
        
        setIsModalOpen(true);
        setIsClosing(false);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false);
        }, 300);
    };

    if (!article) return null;

    return (
        <HeroContainer>
            <EditorButton onClick={handleOpen}>
                Letter from the Editor
            </EditorButton>

            {isModalOpen && (
                <ModalOverlay closing={isClosing} onClick={handleClose}>
                    <ModalContent 
                        closing={isClosing} 
                        onClick={(e) => e.stopPropagation()}
                        style={{ transformOrigin: `${buttonPos.left}px ${buttonPos.top}px` }}
                    >
                        <CloseModalButton onClick={handleClose}>
                            &times;
                        </CloseModalButton>
                        <ContentWrapper>
                            <h2>Letter from the Editor</h2>
                            <p>
                                Dear Readers,
                            </p>
                            <p>
                                Over the past three years, Columbia has seen an unprecedented turnover in University leadership. Since former University President Lee Bollinger, Law ’71, announced he was stepping down from his two-decade tenure in 2022, Columbia has cycled through three other presidents. As former University President Minouche Shafik, former interim University President Katrina Armstrong, and acting University President Claire Shipman, CC ’86, SIPA ’94, stepped through Low Library’s revolving doors, Columbia simultaneously assumed center stage in national attacks on higher education.
                            </p>
                            <p>
                                During this era of instability, the University has handled intense crises—historic campus protests over the war in Gaza, resulting in arrests and drastic disciplinary action against hundreds of students, the cancellation of $400 million in federal funds, and the acquiescence to dozens of demands from President Donald Trump’s administration in an attempt to restore the consequential allocations.
                            </p>
                            <p>
                                Now, another president will take on the responsibility of steering the University towards transparency and consistency. Columbia’s board of trustees <a href="https://www.columbiaspectator.com/news/2026/01/25/columbia-selects-university-of-wisconsin-madison-chancellor-jennifer-mnookin-as-next-university-president-according-to-reports/">announced</a> on Jan. 25 that it had unanimously selected University of Wisconsin–Madison Chancellor Jennifer Mnookin as the University’s next permanent president—the first since Shafik resigned in August 2024. Mnookin is Columbia’s fifth president in four years.
                            </p>
                            <p>
                                In this special edition, Spectator has compiled articles from the past four years, spanning from Bollinger’s resignation to the recent years of high leadership turnover, to ongoing developments in Mnookin’s incoming presidency. As the University seeks stable leadership, we hope this edition serves as a record of the recent turmoil and an illumination of what is to come. 
                            </p>
                            <p>
                                Sincerely,
                            </p>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                                Tsehai Alfred, editor in chief and president<br />
                                Manuela Moreyra, managing editor and vice president
                            </p>
                        </ContentWrapper>
                    </ModalContent>
                </ModalOverlay>
            )}

            <ImageContainer>
                <a href={article.link}>
                    <HeroImage src={article.img} alt={article.title} />
                </a>
                <ImageCaption>
                    {/* Placeholder caption since data might not have it, or use title as caption fallback */}
                    Mnookin is Columbia’s fifth president in four years.
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
