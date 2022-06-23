import styled from "styled-components"

const SignatureText = styled.p`
  color: white;
  font-size: 35px;
  display: inline-block;
  position: absolute;
  top: ${props => props.top || '50%'};
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Permanent Marker', cursive;
  z-index: -1;
`

export const Signature = ({top}) => {
  return (
    <SignatureText top={top}>
      @rubywritescode
    </SignatureText>
  )
}