import { createContext, useContext } from "react";
import { UserAnswer } from "../../features/quiz-page/QuizPage";
import { Question } from "../requests/quizRequest";

export interface QuizContextProps {
    questions: Question[];
    setQuestions: (questions: Question[]) => void;
    answers: UserAnswer[];
    setAnswer: (answer: UserAnswer) => void;
}

const initialState: QuizContextProps = {
    questions: [],
    setQuestions: () => {},
    answers: [],
    setAnswer: () => {}
};

export const QuizContext = createContext<QuizContextProps>(initialState);

export const useQuizContext = () => {
    return useContext(QuizContext)
};