import styled from "styled-components";
import { useCurrentFrame, interpolate, useVideoConfig, spring } from "remotion";
import { Container } from "../../generics/Container";

const FlagBar = styled.div`
  background: ${props => props.color};
  flex: 1;
`

const flagColors = [ '#a5cd56', '#4ea65a', '#fee950' ]

export const HorizontalFlag = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  return (
    <Container flexDirection={'column'} >
      {flagColors.map((color, index) => {

        const barSpring = spring({
          frame: frame - (index * 5) - 5,
          fps: fps,
          config: {
            mass: 1,
            damping: 8,
            stiffness: 99,
          }
        })

        const barSlide = interpolate(barSpring, [0, 1], [width + 5, 0])

        return (
          <FlagBar color={color} key={index} style={{
            transform: `translateX(${barSlide}px)`
          }} />
        )
      })}
    </Container>
  )
}