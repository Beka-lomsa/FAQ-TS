interface Props {
  visible: number | null;
  handleClick: (num: null | number) => void;
  num: number;
  BiChevronUp: JSX.Element;
  BiChevronDown: JSX.Element;
  question: string;
  answer: string;
}

function QuestionListChild(props: Props) {
  const {
    visible,
    handleClick,
    num,
    BiChevronUp,
    BiChevronDown,
    question,
    answer,
  } = props;

  return (
    <div className="QueAnsContainer">
      <div
        onClick={() => handleClick(num)}
        className={visible === 5 ? "QueSListBold" : "QueSList"}
      >
        {question}
        {visible === 5 ? BiChevronUp : BiChevronDown}
      </div>
      {visible === 5 ? <div className="answer"> {answer} </div> : null}
    </div>
  );
}
export default QuestionListChild;
