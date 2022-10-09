import React from 'react';
import '../styles/quiz.css';
import { formatQuizItems } from '../utilities.js';
import Question from './Question';
import Answer from './Answer';
import Confetti from 'react-confetti'

export default function Quiz() {
  const [triviaData, setTriviaData] = React.useState([]);
  const [score, setScore] = React.useState();
  const [restartGame, setRestartGame] = React.useState();
  const [answersChecked, setAnswersChecked] = React.useState();
  const [confetti, setConfetti] = React.useState();

  const winningScore = 5

  function initGame() {
    fetch('https://the-trivia-api.com/api/questions')
      .then((res) => res.json())
      .then((data) => {
        const firstFiveQuestions = data.splice(0, winningScore);
        const quizData = formatQuizItems(firstFiveQuestions);

        // Initializing quiz data and game state
        setTriviaData(quizData);
        setScore(0);
        setRestartGame(false);
        setAnswersChecked(false);
        setConfetti(false)
      });
  }

  React.useEffect(() => {
    initGame()
  }, []);

  React.useEffect(() => {
    displayConfetti()
  }, [score])

  function selectAnswer(quizId, answerId) {
    if (answersChecked) return;

    setTriviaData((prevTriviaData) => {
      // Map through the triviaData state Array
      return prevTriviaData.map((questionItem) => {
        // Identify the specific question which the answer was clicked by matching the id of the question which was clicked and with the id of the answer which was clicked
        const newAnswer = questionItem.answers.map((ans) => {
          if (questionItem.id === quizId && ans.id === answerId) {
            // If the id matches then change the isSelected state to its opposite
            return { ...ans, isSelected: !ans.isSelected };
          } else if (questionItem.id === quizId) {
            // return the rest of the answer  buttons as false to prevent selecting two buttons at the same time
            return { ...ans, isSelected: false };
          } else {
            return ans;
          }
        });

        // Return the question array along with the new answers array
        return { ...questionItem, answers: newAnswer };
      });
    });
    // use the id passing in to map through the triviaData state's answers - if it matches - change the state
  }

  function checkAnswers() {
    // 1. check if all question's answer is selected - return a boolean to be used as a condition
    const areAllAnswersSelected = triviaData.every((questionItem) => {
      return questionItem.answers.some((ans) => ans.isSelected);
    });

    // 2. If all the answers have been selected, map through the data array to scan through the question items and check which answers are selected
    // use a state to track if the check answers button is checked
    // pass it to the Answers component to render the buttons to green or red once the check answer is clicked
    // if the answer is selected, compare the contents to the question item's correct answer
    // if (isSelected && isCorrect) - render green
    // add to score state for end results
    // if state (isSelected && !isCorrect) - render red

    if (areAllAnswersSelected) {
      setAnswersChecked((prevAnswersChecked) => !prevAnswersChecked);

      // adding score
      triviaData.forEach((questionItem) => {
        questionItem.answers.forEach((answerItem) => {
          if (answerItem.isSelected && answerItem.isCorrect) {
            setScore((prevScore) => prevScore + 1);
          }
        });
      });
    }
  }

  function displayConfetti() {
    if (score === winningScore) {
      return setConfetti((prevConfetti) => !prevConfetti)   
    }
  }

  function rebootGame() {
    initGame()
  }

  const renderedQuestions = triviaData.map((questionItem) => {
    return (
      <div className="quiz-item-container" key={questionItem.id}>
        <Question key={questionItem.id} question={questionItem.question} />
        <div className="button-container">
          {questionItem.answers.map((answer) => {
            return (
              <Answer
                key={answer.id}
                isSelected={answer.isSelected}
                isCorrect={answer.isCorrect}
                answer={answer.answer}
                selectAnswer={() => selectAnswer(questionItem.id, answer.id)}
                areAnswersChecked={answersChecked}
              />
            );
          })}
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div className="quiz-content-background">
      {confetti && <Confetti />}
      <div className="quiz-content-container">
        {renderedQuestions}

        <div className="check-answer-button-container">
          <button
            className={!answersChecked ? 'check-ans-button' : 'hide'}
            onClick={() => checkAnswers()}
          >
            Check answers
          </button>
        </div>

        <div className={!answersChecked ? 'hide' : 'results-container'}>
          <span className="results-text">
            {confetti ? 'Congratulations! You got a perfect score!' : `You scored ${score}/${winningScore} correct answers`}
          </span>
          <button 
            className="play-again-button"
            onClick={() => rebootGame()}
          >Play again</button>
        </div>
      </div>

      <span className="blob-2"></span>
      <span className="blob-1"></span>
    </div>
  );
}
