import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const LightStyle = styled.a({
  color: '#262626',
  cursor: 'pointer',
  },({ theme }) => {
    let switchColor = []
    if(theme === 'light') {
      switchColor.push({ color: '#36cfc9' })
    } 
    return switchColor;
  }
)

const DarkStyle = styled.a({
  color: '#262626',
  cursor: 'pointer',
  },({ theme }) => {
    let switchColor = []
    if(theme === 'dark') {
      switchColor.push({ color: '#36cfc9' })
    } else {
      switchColor.push({ color: '#262626' })
    }
    return switchColor;
  }
)

const ThemeSwitcher = ({ switchTheme }) => (
  <ul className="theme-swither">
    <li>
      <LightStyle 
        onClick={(e) => switchTheme('light', e)}>
        Light
      </LightStyle>
    </li>
    <li>
      <DarkStyle
        onClick={(e) => switchTheme('dark', e)}>
        Dark
      </DarkStyle>
    </li>
  </ul>
);

Comment.propTypes = {
  switchTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default ThemeSwitcher;