import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  color: ${({theme}) => theme.text};
  font-weight: 300;
  margin: .5em 0 1.2em 0;
`;

const PStyled = ({data}) => <StyledP>{data}</StyledP>;

export default PStyled; 