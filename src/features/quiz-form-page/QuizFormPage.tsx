import { useEffect, useState } from "react";
import { createQuiz } from "../../common/requests/quizRequest";
import {
  Category,
  fetchCategories,
} from "../../common/requests/categoriesRequest";
import { Spinner } from "../../common/components/Spinner";
import { QuizForm } from "./QuizForm";
import { useQuizContext } from "../../common/contexts/QuizContext";
import { useNavigate } from "react-router-dom";

export const QuizFormPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setQuestions } = useQuizContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then((categoryResponse) => {
      setCategories(categoryResponse);
      setIsLoading(false);
    });
  }, []);

  const fetchQuiz = async (
    amount: number,
    difficulty: string | undefined,
    category: Category | undefined
  ) => {
    const quizQuestions = await createQuiz(amount, difficulty, category);
    setQuestions(quizQuestions);
    navigate("/my-quiz-app/quiz");
  };

  return (
    <div>
      <h1>Quiz form</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <QuizForm categories={categories} submit={fetchQuiz} />
      )}
    </div>
  );
};