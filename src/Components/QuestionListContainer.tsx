import { useState } from "react";
import "../Components/QuestionListContainer.css";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import QuestionListChild from "./QuestionListCild";

function QuestionListContainer() {
  const [visible, setVisible] = useState<null | number>(null);

  function handleClick(item: null | number) {
    if (visible === item) {
      setVisible(null);
    } else {
      setVisible(item);
    }
  }

  return (
    <div className="QuestionMainContainer">
      <div className="QueAnsContainer">
        <div
          onClick={() => handleClick(1)}
          className={visible === 1 ? "QueSListBold" : "QueSList"}
        >
          How many team members can I invite ?
          {visible === 1 ? (
            <BiChevronUp className="icon" />
          ) : (
            <BiChevronDown className="icon" />
          )}
        </div>
        {visible === 1 ? (
          <div className="answer"> You can invite two member </div>
        ) : null}
      </div>
      <div className="QueAnsContainer">
        <div
          onClick={() => handleClick(2)}
          className={visible === 2 ? "QueSListBold" : "QueSList"}
        >
          How many team members can I invite ?
          {visible === 2 ? (
            <BiChevronUp className="icon" />
          ) : (
            <BiChevronDown className="icon" />
          )}
        </div>
        {visible === 2 ? (
          <div className="answer"> You can invite two member </div>
        ) : null}
      </div>
      <div className="QueAnsContainer">
        <div
          onClick={() => handleClick(3)}
          className={visible === 3 ? "QueSListBold" : "QueSList"}
        >
          How many team members can I invite ?
          {visible === 3 ? (
            <BiChevronUp className="icon" />
          ) : (
            <BiChevronDown className="icon" />
          )}
        </div>
        {visible === 3 ? (
          <div className="answer"> You can invite two member </div>
        ) : null}
      </div>
      <div className="QueAnsContainer">
        <div
          onClick={() => handleClick(4)}
          className={visible === 4 ? "QueSListBold" : "QueSList"}
        >
          How many team members can I invite ?
          {visible === 4 ? (
            <BiChevronUp className="icon" />
          ) : (
            <BiChevronDown className="icon" />
          )}
        </div>
        {visible === 4 ? (
          <div className="answer"> You can invite two member </div>
        ) : null}
      </div>
      <QuestionListChild
        visible={visible}
        handleClick={handleClick}
        num={5}
        BiChevronUp={<BiChevronUp className="icon" />}
        BiChevronDown={<BiChevronDown className="icon" />}
        question="How many team members can I invite ?"
        answer="You can invite two member"
      />
    </div>
  );
}

export default QuestionListContainer;
