import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  color: ${({theme}) => theme.h34};
  font-weight: 500;
  margin: .5em 0;
`;

const H4Styled = ({children}) => <StyledH4>{children}</StyledH4>;

export default H4Styled; 