import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion"
import { StyledFill } from "../generics/StyledFill"
import { VerticalFlag } from "./components/VerticalBar"
import { Text } from "./components/Text"
import { Signature } from "../prideAcab/components/Signature"

export const TranscendFlag = ({keyword}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const textArray = Array(8).fill(keyword)

  const textSpring = spring({
    frame: frame - 90, // start at frame 90
    fps: fps,
    config: {
      mass: 3,
      stiffness: 50,
      damping: 10,
    }
  })

  // scales up the text so it eventually no longer fits in the frame
  const textFlyOut = interpolate(textSpring, [0, 1], [1, 30])
  const flagFadeOut = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0])

  return (
    <>
      <StyledFill bgcolor="black" style={{ zIndex: -2 }}>
        <AbsoluteFill style={{ opacity: flagFadeOut }}>
          <VerticalFlag />
        </AbsoluteFill>
        <AbsoluteFill style={{ padding: '100px 50px', justifyContent: 'center', transform: `scale(${textFlyOut})` }}>
          { textArray.map((keyword, index) => {
            return (
              <Text text={keyword} key={index} />
            )
          })}
        </AbsoluteFill>
        <Signature style={{top: '120px'}} />
      </StyledFill>
    </>
  )
}