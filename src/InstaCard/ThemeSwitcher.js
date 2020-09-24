import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ThemeSwitcherStyle = styled.li({
  padding: '5px',
  marginBottom: '7px'
})

const ThemeLetterStyle = styled.a({
  color: '#262626',
  cursor: 'pointer',
  },({ chosen }) => {
    let switchColor = []
    if(chosen === true) {
      switchColor.push({ color: '#36cfc9' })
    } 
    return switchColor;
  }
)

const ThemeSwitcher = ({ theme, switchTheme }) => (
  <ul>
    <ThemeSwitcherStyle>
      <ThemeLetterStyle 
        chosen={theme === 'light'}
        onClick={(e) => switchTheme('light', e)}>
        Light
      </ThemeLetterStyle>
    </ThemeSwitcherStyle>
    <ThemeSwitcherStyle>
      <ThemeLetterStyle
        chosen={theme === 'dark'}
        onClick={(e) => switchTheme('dark', e)}>
        Dark
      </ThemeLetterStyle>
    </ThemeSwitcherStyle>
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