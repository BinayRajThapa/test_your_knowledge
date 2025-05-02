import React from "react";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (answer: string) => void;
  userAnswer: {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  } | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <div dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answers.map((answer) => {
          const isCorrect = userAnswer?.correctAnswer === answer;
          const isClicked = userAnswer?.answer === answer;

          return (
            <ButtonWrapper
              key={answer}
              correct={isCorrect}
              userClicked={isClicked}
            >
              <button
                disabled={!!userAnswer}
                value={answer}
                onClick={() => callback(answer)}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </ButtonWrapper>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
