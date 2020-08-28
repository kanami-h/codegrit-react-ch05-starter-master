import React from 'react';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
// ラベル追加の記述あとで必要かも？

const FlexListContainer = styled.ul({
  display: 'flex'
},({ direction }) => {})
let flexStyles = []
if(direction === 'column') {
  styles.push({ flexDirection: 'row' })
} 
return flexStyles;


export default FlexListContainer;