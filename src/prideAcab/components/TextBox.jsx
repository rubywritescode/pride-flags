import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: white;
  position: absolute;
  z-index: 2;
  background: lightgrey;
  padding: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 175px;
  text-align: center;
  width: calc(100% - 160px);
  border-radius: 16px;
  box-shadow: 5px 5px 15px 3px rgba(0,0,0,0.5);
`

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
  transform: scale(1.3) ${props => props.secondary ? 'rotate(1deg)' : 'rotate(-3deg)'};

  top: ${props => props.secondary ? '840px' : '200px'};
  left: ${props => props.secondary ? '300px' : '60px'};
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
  padding-left: 40px;

  h3 {
    margin: 0;
    padding: 0;
    font-size: 75px;
  }
`

const BottomBar = styled.div`
  background: ${props => props.secondary ? STICKER_BLUE : STICKER_RED};
  height: 32px;
  border-radius: 0 0 16px 16px;
`

export const TextBox = ({text, secondary}) => {
  return (
    <Sticker secondary={secondary}>
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