import "../src/App.css"
import ImgContainer from "./Components/ImgContainer"
import QuestionListContainer from "./Components/QuestionListContainer"

/* Main Component */
function App() {

  return (
    <div className="backGround">
      <div className="mainContainer">
        <p>faq</p>
        <div className="imgSliderContainer">
          <ImgContainer/>
          <QuestionListContainer/>
        </div>
      </div>
    </div>
  )
}

export default App
