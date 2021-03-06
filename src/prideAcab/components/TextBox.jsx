import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import styled from "styled-components";

const STICKER_RED = "#db1f33"
const STICKER_BLUE = "#295095"

const Sticker = styled.div`
  background: white;
  padding: 16px;
  border-radius: 24px;
  height: 460px;
  position: absolute;
  width: 700px;
  z-index: 3;
  box-shadow: 5px 5px 15px 3px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  transform: scale(1.3) ${props => props.secondary ? 'rotate(4deg)' : 'rotate(-3deg)'};

  top: ${props => props.secondary ? '800px' : '200px'};
  left: ${props => props.secondary ? '230px' : '130px'};
`

const TopBar = styled.div`
  background: ${props => props.secondary ? STICKER_BLUE : STICKER_RED};
  border-radius: 16px 16px 0 0;
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif !important;

  h1 {
    margin: 0;
    font-size: 65px;
    letter-spacing: 5px;
    font-weight: bold;
  }

  h2 {
    margin: 0;
    padding-bottom: 8px;
    font-size: 24px;
  }
`

const MiddleBar = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 0;
    padding: 0;
    font-size: 75px;
    text-align: center;
  }
`

const BottomBar = styled.div`
  background: ${props => props.secondary ? STICKER_BLUE : STICKER_RED};
  height: 32px;
  border-radius: 0 0 16px 16px;
`

export const TextBox = ({text, secondary, delay}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // fades in the stickers based on the delay prop
  const stickerOpacity = interpolate(frame - delay, [0, 20], [0, 1])
  
  // sets sticker spring to start at frame 200
  const stickerSpring = spring({
    frame: frame - 200,
    fps: fps,
    config: {
      mass: 1,
      damping: 15,
      stiffness: 99,
    }
  })

  // sets where stickers should move based on the secondary prop
  const stickerMovement = secondary ? -1000 : 1000;
  // variable for the additional transform values needed for this design
  // ensures the look of the component doesn't change once the animation starts changing the transform values
  const stickerTransform = secondary ? "scale(1.3) rotate(4deg)" : "scale(1.3) rotate(-3deg)"

  // the starts the sticker slide at the curren position (0) then animates to the position in stickerMovement
  const stickerSlide = interpolate(stickerSpring, [0, 1], [0, stickerMovement])

  return (
    <Sticker secondary={secondary} style={{ 
      opacity: stickerOpacity, 
      transform: `${stickerTransform} translateX(${stickerSlide}px)` 
    }}>
      <TopBar secondary={secondary}>
        <h1>HELLO</h1>
        <h2>MY NAME IS</h2>
      </TopBar>
      <MiddleBar>
        <h3 className="marker">{text}</h3>
      </MiddleBar>
      <BottomBar secondary={secondary} />
    </Sticker>
  )
}