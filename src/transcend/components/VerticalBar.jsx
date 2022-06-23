import styled from "styled-components";
import { useCurrentFrame, interpolate, useVideoConfig, spring } from "remotion";
import { Container } from "../../generics/Container";
import { transFlagColors } from "../constants";

const FlagBar = styled.div`
  background: ${props => props.color};
  flex: 1;
`

export const VerticalFlag = () => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();

  return (
    <Container>
      {transFlagColors.map((color, index) => {

        const barSpring = spring({
          frame: frame - (index * 5) - 5,
          fps: fps,
          config: {
            mass: 1,
            damping: 15,
            stiffness: 99,
          }
        })

        const barSlide = interpolate(barSpring, [0, 1], [height + 5, 0])

        return (
          <FlagBar color={color} key={index} style={{
            transform: `translateY(${barSlide}px)`
          }} />
        )
      })}
    </Container>
  )
}