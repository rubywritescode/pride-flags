import styled from 'styled-components'
import { AbsoluteFill } from 'remotion'

export const StyledFill = styled(AbsoluteFill)`
  background-color: ${props => props.bgcolor};
  flex-direction: ${props => props.flexdirection} !important;
`