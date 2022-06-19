import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import styled from "styled-components";

const BAR_SPACER = 150;
const BLACK = "#000";
const BROWN = "#613915";
const BLUE = "#73D7EE";
const PINK = "#FFAFC7";
const WHITE = "#FFF";

const Container = styled.div`
  position: absolute;
  top: -240px;
  z-index: 1;
  width: 100%;
`

const AngledBar = styled.div`
  width: 150px;
  height: 1200px;
  background: ${props => props.color};
  position: absolute;
  transform: ${props => props.reverse ? "rotate(45deg)" : "rotate(-45deg)"};
  left: ${props => props.reverse ? "837px" : "94px"};;
  top: ${props => props.spacer ? `-${BAR_SPACER * props.spacer}px` : 0};
`

export const AngledFlag = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const angleSpring = spring({
    frame: frame - 60,
    fps: fps,
    config: {
      mass: 2 ,
      damping: 100,
      stiffness: 200,
    }
  })

  const angleSlide = interpolate(angleSpring, [0, 1], [-850, 0])

  return (
    <Container style={{transform: `translateY(${angleSlide}px)`}}>
      <AngledBar color={BLACK} />
      <AngledBar color={BLACK} reverse />
      <AngledBar color={BROWN} spacer={1}/>
      <AngledBar color={BROWN} spacer={1} reverse />
      <AngledBar color={BLUE} spacer={2} />
      <AngledBar color={BLUE} spacer={2} reverse />
      <AngledBar color={PINK} spacer={3} />
      <AngledBar color={PINK} spacer={3} reverse />
      <AngledBar color={WHITE} spacer={4} />
      <AngledBar color={WHITE} spacer={4} reverse />
      <AngledBar color={WHITE} spacer={5} />
      <AngledBar color={WHITE} spacer={5} reverse />
    </Container>
  )
}