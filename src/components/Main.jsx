import React from 'react';
import styled from "styled-components";

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
    grid-row-gap: 0.5em;

    @media only screen and (max-width: 767px){
        grid-template-columns: 1fr;
    }
`;
 
const MainStyled = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 100vw);
    justify-content: center;
    padding: 1em;
`;


const Main = ({children}) => (
    <MainStyled>
        <MainContainer>
            {children}
        </MainContainer>
    </MainStyled>
);

export default Main;