import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
// ラベル追加の記述あとで必要かも？

const FlexListContainer = styled.ul({}) => {
  {
    'display': 'flex',
    'flexDirection': 'column',
  },
  props => {
    let flexStyles = []
    if(props.direction) {
      styles.push({ 'flexDirection': 'row' })
    } else {
      styles.push({ 'flexDirection': 'column' })
    }
    return flexStyles;
  }
}

export default FlexListContainer;