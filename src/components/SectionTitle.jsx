import React from "react";
import styled from "styled-components";
import { size } from "../device";

const Title = styled.p`
  font-family: 'EB Garamond', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.8rem;
  line-height: 58px;
  /* identical to box height */
  text-transform: capitalize;
  letter-spacing: 0.02em;
  max-width: 100%;
  position: relative;
  margin:0.5rem;
  padding:20px; 
  text-align: ${(prop) => (prop.linePosition === "after" ? "left" : "right")};

  @media (max-width:${size.mobile}) {
    font-size: 2rem;  
    margin-top:0;
  }
  /* Blue 02 */

  color: #424242;
`;

const Hr = styled.hr`
  border: 1px solid #424242;
  margin:0;
`
const SectionTitle = ({ linePosition, title }) => {
  return (
    <>
    <Title length={title.length} linePosition={linePosition}>
      {title}
    </Title>
    <Hr/>
    </>
  );
};

export default SectionTitle;
