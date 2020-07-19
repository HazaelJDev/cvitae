import React from 'react'
import styled from 'styled-components';
import Moon from '../icons/Moon';
import Sun from '../icons/Sun';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  height: 34px;
  width: 60px;
  outline: none;

  
  svg {
    height: 2em;
    width: 2em;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ theme }) => theme.type === 'light' ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:last-child {
      transform: ${({ theme }) => theme.type === 'light' ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const ToggleButton = ({ theme, toggleTheme}) => {
  return (
    <ToggleContainer onClick={toggleTheme} >
      <Sun />
      <Moon />
    </ToggleContainer>
  )
};


export default ToggleButton;