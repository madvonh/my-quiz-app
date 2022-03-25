import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { useQuizContext } from "../../common/contexts/QuizContext";

export const QuizCompletedPage = ()  => {

    const { answers} =  useQuizContext();
    const points =  answers
        .filter(answer => answer.answer.isCorrectAnswer)
        .length;
        const navigate = useNavigate();
    return  (  
        <div id ="Leaderboard">
            <h1>Leaderboard</h1>
            <p>
                Quiz is complete! <br/>
                Antal rätt: {points}/{answers.length}
            </p>
            {
                answers.map(answer => {
                   return  <>
                    <div>{answer.answer.isCorrectAnswer ? "rätt" : "fel"}</div>
                    <div>Ditt svar: {answer.answer.answer}</div>
                    <div></div>
                    </>
                })
            } 
                  <Button onClick={() =>  {
                     navigate("/my-quiz-app");
                }}>
                 Nya frågor</Button>

        </div>
    );
}