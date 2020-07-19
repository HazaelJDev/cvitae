import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import LoaderStyled from '../styled/LoaderStyled';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experiencie from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Settings from '../components/Settings';
import useGetData from '../hooks/useGetData';
import { useDarkMode } from '../hooks/useDarkMode';
import { useLang } from '../hooks/useLang';
import {lightTheme, darkTheme} from '../styled/theme';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.bodyBackground};
        color: ${({ theme }) => theme.text};
        transition: all 0.25s linear;
    }

    .activeLang{
        background-color: ${({theme}) => theme.h2};
        color: #fff;
        cursor: none;
    }
`;

const App = () => {
    const [lang, toggleLang, componentMountedLang] = useLang();
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const data = useGetData();

    return data.length === 0 ? <LoaderStyled /> : (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Settings theme={theme} toggleFunc={toggleTheme} changeLang={toggleLang} lang={lang}/>
            <Main>
                <GlobalStyle />
                <Sidebar >
                    <About
                        avatar={data[lang].avatar}
                        name={data[lang].name}
                        profession={data[lang].profession}
                        bio={data[lang].bio}
                        address={data[lang].address}
                        social={data[lang].social}
                    />
                </Sidebar>
                <Info>
                    <Education data={data[lang].education} lang={lang}/>
                    <Experiencie data={data[lang].experience} lang={lang}/>
                    <Certificates data={data[lang].certificate} lang={lang}/>
                    <Skills data={data[lang].skills} lang={lang}/>
                </Info>
            </Main>
        </ThemeProvider>  
    );
}

export default App;