import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import H4Styled from '../styled/H4Styled';
import PStyled from '../styled/PStyled';

const Education = props => (
  <div className="Education">
    <H2Styled data={props.lang == "en" ? "Education" : "Educación"} />
    <div className="Education-container">
        {props.data.map((edu,index) => (
          <div className="Education-item" key={`Edu-${index}`}>
            <H3Styled>{edu.degree}</H3Styled>
            <H4Styled>{edu.institution}, <span>{edu.startDate} - {edu.endDate}</span></H4Styled>
            <PStyled data={edu.description}/>
          </div>
        ))}
    </div>
  </div>
);

export default Education;