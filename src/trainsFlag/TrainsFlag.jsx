import { AbsoluteFill } from 'remotion';
import { HorizontalFlag } from './components/HorizontalFlag';
import { Signature } from '../prideAcab/components/Signature';
import { Tweet } from './components/Tweet';

import profileImage from "./assets/rupaul-twitter.jpeg";
import tweetImage from "./assets/trains-flag.jpeg";

const tweetDetails = {
  username: 'RuPaul',
  profileImage: profileImage,
  bodyText: "In the 10 years we've been casting Drag Race, the only thing we've ever screened for is: Charisma, Uniqueness, Nerve, and Talent. And that will never change.",
  contentImage: tweetImage,
} 

export const TrainsFlag = () => {
  return (
    <AbsoluteFill style={{ background: 'black', zIndex: -2 }}>
      <HorizontalFlag />
      <Tweet tweet={tweetDetails} />
      <Signature top={"60px"} />
    </AbsoluteFill>
  )
}