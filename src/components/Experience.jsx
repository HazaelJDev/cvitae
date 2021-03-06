import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import H4Styled from '../styled/H4Styled';
import PStyled from '../styled/PStyled';

const Experiencie = (props) => (
  <div className="Experience">
    <H2Styled data={props.lang == "en" ? "Experience" : "Experiencia"}/>
    <div className="Experience-container">
      {props.data.map((exp,index) => (
        <div className="Experience-item" key={`Experience-${index}`}>
          <H3Styled>{exp.jobTitle}</H3Styled>
          <H4Styled>{exp.company}, <span>{exp.startDate} - {exp.endDate}</span></H4Styled>
          <PStyled data={exp.jobDescription} />
        </div>
      ))}
    </div>
  </div>
);

export default Experiencie;