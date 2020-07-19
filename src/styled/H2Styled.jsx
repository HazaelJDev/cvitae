import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: .8px;
  margin: 1em 0 0 0;
  color: ${({theme}) => theme.h2};
`;

const H2Styled = ({data}) => <StyledH2>{data}</StyledH2>;

export default H2Styled; 