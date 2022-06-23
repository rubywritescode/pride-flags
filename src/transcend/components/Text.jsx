import styled from "styled-components"

const StyledText = styled.p`
  font-size: 120px;
  font-family: 'Monoton', cursive;
  text-align: center;
  padding: 0;
  margin: 0;
`

export const Text = ({text}) => {
  return (
    <StyledText>{text}</StyledText>
  )
}