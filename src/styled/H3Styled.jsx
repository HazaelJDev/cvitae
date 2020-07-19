import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  color: ${({theme}) => theme.h34};
  font-weight: 400;
  margin: .5em 0;
`;

const H3Styled = ({children}) => <StyledH3>{children}</StyledH3>;

export default H3Styled; 