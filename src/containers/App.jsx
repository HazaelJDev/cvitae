import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import LoaderStyled from '../styled/LoaderStyled';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experiencie from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';


const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #f5f5f5;
    }
`;

const App = () => {
    const [langEn, setLangEn] = useState(true);
    const [dataLang, setDataLang] = useState({});
    const data = useGetData();
    /* const handlerChangeLang = () => {
        setLangEn(!langEn);
        if(langEn){
            setDataLang(data.en);
        }else{
            setDataLang(data.es);
        }
    } */
    console.log(data);
    return data.length === 0 ? <LoaderStyled> Cargando...</LoaderStyled> : (
        <Main>
            <GlobalStyle />
            <Sidebar >
                <About
                    avatar={data.en.avatar}
                    name={data.en.name}
                    profession={data.en.profession}
                    bio={data.en.bio}
                    address={data.en.address}
                    social={data.en.social}
                />
            </Sidebar>
            <Info>
                <Education data={data.en.education} />
                <Experiencie data={data.en.experience} />
                <Certificates data={data.en.certificate} />
                <Skills data={data.en.skills}/>
            </Info>
        </Main>
    );
}

export default App;