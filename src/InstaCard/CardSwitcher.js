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


const CardSwitcher = ({ id, switchCard }) => (
  <ul>
    <ThemeSwitcherStyle>
      <ThemeLetterStyle
        chosen={id === 1}
        onClick={(e) => switchCard(1, e)}>
        1枚目
      </ThemeLetterStyle>
    </ThemeSwitcherStyle>
    <ThemeSwitcherStyle>
      <ThemeLetterStyle
        chosen={id === 2}
        onClick={(e) => switchCard(2, e)}>
        2枚目
      </ThemeLetterStyle>
    </ThemeSwitcherStyle>
  </ul>
);

Comment.propTypes = {
  switchCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

Comment.defaultProps = {
  id: 1,
}

export default CardSwitcher;