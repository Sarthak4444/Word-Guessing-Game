import "./style.css";
import Question from "./Question";
import ScoreBoard from "./Score Board";
import Button from "./Components/button";
import { useState, useEffect } from "react";

import { AllQuestions } from "./Constant";

function Game() {
  const ACTIVE_QUESTION_INDEX = 0;

  const [score, setScore] = useState(0);
  const [ques, setQues] = useState(structuredClone(AllQuestions));
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(
    ACTIVE_QUESTION_INDEX
  );

  const activeQuestion = ques[activeQuestionIndex];

  const { question, hint, answer } = activeQuestion || {};

  function onButtonClick() {
    setActiveQuestionIndex(Math.floor(Math.random() * 11));
  }

  return (
    <div className="flex flex-col justify-center items-center bg-[#118ab2] w-full h-screen">
      <Question
        setScore={setScore}
        setQues={onButtonClick}
        score={score}
        answer={answer}
        ques={question}
        hint={hint}
      />

      <ScoreBoard score={score} />

      <Button onButtonClick={onButtonClick} />
    </div>
  );
}

export default Game;
