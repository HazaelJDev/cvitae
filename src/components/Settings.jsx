import React from 'react';
import styled, {css} from "styled-components";
import ToggleButton from '../styled/ToggleButton';

const LiLang = styled.li`
    list-style: none;
    color: ${({theme}) => theme.text}; 
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%; 
    padding: 0.5em;
    cursor: pointer;
`;


const SettingLang = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50px;
    margin: 0;
    padding: 8px;
`;

 
const SettingsStyled = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 100vw) 2fr;
    justify-content: center;
    align-items: center;
    padding: 1em;
    /* background-color: #263859; */
    color: #000;
`;


const Settings = ({theme,toggleFunc,changeLang,lang}) => {
    return <SettingsStyled>
        <SettingLang> 
            <LiLang className={lang == "en" ? "activeLang" : ""} onClick={lang == "es" ? changeLang : console.log} >En</LiLang>
            <LiLang className={lang == "es"? "activeLang" : ""} onClick={lang == "en" ? changeLang : console.log} >Es</LiLang>
        </SettingLang>
        <ToggleButton theme={theme} toggleTheme={toggleFunc} />
    </SettingsStyled>
};

export default Settings;