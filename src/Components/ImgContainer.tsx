import BackMg from "../img/backMg.png";
import boxImg from "../img/Group 6.svg"
import "./ImgContainer.css"

export default function ImgContainer() {
  return(
    <>
      <img className="imgContainer" src={BackMg} alt="#" />
      <img className="boxImg" src={boxImg} alt="boxImg" />
    </>
  )
}
