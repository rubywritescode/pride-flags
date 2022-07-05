import { useCurrentFrame, interpolate } from "remotion";
import styled from "styled-components";
import badge from "./verified-badge.png";
const size = 800;

const Background = styled.div`
  background-color: white;
  border-radius: 16px;
  width: ${size}px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
`

const Image = styled.img`
  border-radius: 50%;
  height: 155px;
  width: 155px;
  display: block;
  margin-right: 24px;
`

const TweetHeader = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0;
  }

  h1, h2 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 60px;
    position: relative;
  }

  h1::after {
    content: "";
    position: absolute;
    top: 5px;
    right: -55px;
    width: 45px;
    height: 45px;
    z-index: 10;
    background-color: red;
    background-image: url(${badge});
    background-size: cover;
  }

  h2 {
    font-size: 40px;
    font-weight: normal;
    color: darkgray;
  }
`

const TweetBody = styled.div`
  margin-top: 24px;
  font-size: 50px;
`

const TweetImage = styled.div`
  margin-top: 24px;

  img {
    display: block;
    width: 100%;
  }
`

export const Tweet = ({ tweet }) => {
  const { profileImage, username, bodyText, contentImage } = tweet;
  const frame = useCurrentFrame();
  const tweetOpacity = interpolate(frame - 120, [0, 20], [1, 0])

  return (
    <Background style={{opacity: tweetOpacity}}>
      <TweetHeader>
        {profileImage && <Image src={profileImage} alt="" /> }
        <div>
          <h1>{username}</h1>
          <h2>@{username}</h2>
        </div>
      </TweetHeader>
      <TweetBody>{bodyText}</TweetBody>
      { contentImage && 
        <TweetImage>
          <img src={contentImage} alt="" />
        </TweetImage>
      }
    </Background>
  )
}