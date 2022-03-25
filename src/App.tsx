import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { QuizContext, QuizContextProps } from "./common/contexts/QuizContext";
import { Question } from "./common/requests/quizRequest";
import { QuizCompletedPage } from "./features/quiz-completed-page/QuizCompletedPage";
import { QuizFormPage } from "./features/quiz-form-page/QuizFormPage";
import { QuizPage, UserAnswer } from "./features/quiz-page/QuizPage";

function App() {

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  const contextValue: QuizContextProps = useMemo(() => {
    const setAnswer = (answer: UserAnswer) => {
      setAnswers([...answers, answer])
    }
    return { questions, setQuestions, answers, setAnswer };
  }, [questions, setQuestions, answers]);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log(params);

  return ( 
    <div className="App">
      <QuizContext.Provider value={contextValue}>
        <Routes>
          <Route path="my-quiz-app">
            <Route index element={<QuizFormPage />}></Route>
            <Route path="quiz" element={<QuizPage />}></Route>
            <Route path="completed" element={<QuizCompletedPage />}></Route>
        </Route>
        </Routes>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
