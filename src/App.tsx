import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./API";
import ScoreBreakdown from "./components/ScoreBreakdown";
import { QuestionState, Difficulty } from "./API";
import {
  GlobalStyle,
  Wrapper,
  ProgressContainer,
  ProgressBar,
} from "./App.styles";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (selectedAnswer: string) => {
    if (!gameOver) {
      const answer = selectedAnswer;
      const correct = questions[number]?.correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number]?.question || "",
        answer,
        correct,
        correctAnswer: questions[number]?.correct_answer || "",
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Test Your Knowledge</h1>

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}

        {!gameOver ? (
          <p className="score">Score: {score}</p>
        ) : userAnswers.length === TOTAL_QUESTIONS ? (
          <p className="score">
            Final Score: {score} / {TOTAL_QUESTIONS}
          </p>
        ) : null}

        {loading && <p>Loading Questions ...</p>}

        {/* ✅ Progress bar */}
        {!loading && !gameOver && (
          <ProgressContainer>
            <ProgressBar style={{ width: `${((number + 1) / TOTAL_QUESTIONS) * 100}%` }} />
          </ProgressContainer>
        )}

        {!loading && !gameOver && questions.length > 0 && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers[number]}
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
          <ScoreBreakdown answers={userAnswers} />
      </Wrapper>
    </>
  );
};

export default App;
