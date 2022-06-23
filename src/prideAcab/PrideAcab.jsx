import { useCurrentFrame, interpolate, useVideoConfig, AbsoluteFill } from "remotion"
import "../styles/style.css"
import { VerticalFlag } from "./components/VerticalFlag"
import { AngledFlag } from "./components/AngledFlag"
import { StyledFill } from "../generics/StyledFill"
import { TextBox } from "./components/TextBox"
import { Signature } from "./components/Signature"
import { flagColors } from "./constants"

export const PrideAcab = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0])

  return (
    <StyledFill bgcolor="black" style={{zIndex: -2}}>
      <AbsoluteFill style={{opacity: fadeOut}}>
        <AngledFlag />
        <VerticalFlag colorArray={flagColors} />
        <TextBox text="NOT GAY AS IN HAPPY" delay={100} />
        <TextBox text="QUEER AS IN F%$! THE POLICE" secondary delay={115} />
      </AbsoluteFill>
      <Signature />
    </StyledFill>
  )
}