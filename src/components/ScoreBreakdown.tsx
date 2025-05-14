import React from "react";
import styled from "styled-components";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

type Props = {
  answers: AnswerObject[];
};

const BreakdownWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const QuestionItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const AnswerText = styled.p<{ correct?: boolean }>`
  color: ${({ correct }) => (correct ? "#28a745" : "#dc3545")};
  font-weight: bold;
`;

const ScoreBreakdown: React.FC<Props> = ({ answers }) => (
  <BreakdownWrapper>
    <h2>📊 Score Breakdown</h2>
    {answers.map((ans, index) => (
      <QuestionItem key={index}>
        <p dangerouslySetInnerHTML={{ __html: `${index + 1}. ${ans.question}` }} />
        <AnswerText correct={ans.correct}>
          Your Answer: <span dangerouslySetInnerHTML={{ __html: ans.answer }} />
        </AnswerText>
        {!ans.correct && (
          <AnswerText correct>
            Correct Answer:{" "}
            <span dangerouslySetInnerHTML={{ __html: ans.correctAnswer }} />
          </AnswerText>
        )}
      </QuestionItem>
    ))}
  </BreakdownWrapper>
);

export default ScoreBreakdown;
