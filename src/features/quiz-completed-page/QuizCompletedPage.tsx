import { useQuizContext } from "../../common/contexts/QuizContext";

export const QuizCompletedPage = ()  => {

    const { answers} =  useQuizContext();
    const points =  answers
        .filter(answer => answer.answer.isCorrectAnswer)
        .length;
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

        </div>
    );
}