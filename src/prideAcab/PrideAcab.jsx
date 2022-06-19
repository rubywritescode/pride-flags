import "../styles/style.css"
import { VerticalFlag } from "./components/VerticalFlag"
import { AngledFlag } from "./components/AngledFlag"
import { StyledFill } from "../generics/StyledFill"
import { TextBox } from "./components/TextBox"

export const PrideAcab = () => {
  return (
    <StyledFill bgcolor="black">
      <AngledFlag />
      <VerticalFlag />
      <TextBox text="NOT GAY AS IN HAPPY" delay={100} />
      <TextBox text="QUEER AS IN F%$! THE POLICE" secondary delay={115} />
    </StyledFill>
  )
}