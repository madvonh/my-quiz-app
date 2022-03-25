import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { useQuizContext } from "../../common/contexts/QuizContext";
import { Answer } from "../../common/requests/quizRequest";
import { QuestionHandler } from "./QuestionHandler";

export interface UserAnswer {
  questionText: string;
  answer: Answer;
}

export const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { questions, answers, setAnswer } = useQuizContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/my-quiz-app/");
    }
  }, [questions, navigate]);

  if (questions.length === 0) {
    return null;
  }

  const onAnswer = (answer: Answer) => {
    setAnswer({ 
      questionText: questions[currentQuestionIndex].question, 
      answer 
    });
  };


  const moveToNextQuestion = () => {
    const nextQuestionIndex =  currentQuestionIndex + 1;
    if (nextQuestionIndex === questions.length){
      navigate("/my-quiz-app/completed");
    }

    setCurrentQuestionIndex(nextQuestionIndex);
  };
  return (
    <div> 
      <QuestionHandler
        question={questions[currentQuestionIndex]}
        onClick={onAnswer}
        userAnswer={answers[currentQuestionIndex]?.answer}
      />
      <Button
        disabled={answers[currentQuestionIndex] === undefined}
        onClick={() => moveToNextQuestion()}
      >
        Next question
      </Button>
    </div>
  );
};