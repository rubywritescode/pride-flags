import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'stretch'};
`

export const Container = ({children, flexDirection, justifyContent, alignItems}) => {
  return (
    <Wrapper className="wrapper" flexDirection={flexDirection} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Wrapper>
  )
}