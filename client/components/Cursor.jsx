import React from 'react';
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  from, to {
    opacity: 1;
  }
`

const CursorSpan = styled.span`
  font-weight: 600;
  color: white;
  font-size: 280px;
  animation: ${blink} 1s infinite;
`

const Cursor = () => (
  <CursorSpan >|</CursorSpan>
)

Cursor.propTypes = { className: PropTypes.string }
Cursor.defaultProps = { className: '' }

export default Cursor