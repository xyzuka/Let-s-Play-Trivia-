import React from 'react'
import '../styles/quiz.css'
import Question from './Question'

export default function Quiz() {
  const [allQuestions, setAllQuestions] = React.useState([])
  const [score, setScore] = React.useState('0')

  React.useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions")
      .then(res => res.json())
      .then(data => {
        const firstFiveQuestions = data.slice(0, 1)
        setAllQuestions(firstFiveQuestions)
      })
  }, [])

  // user checks answer by clicking button
  function checkAnswers(answersState, correctAnswer, setAnswers) {
    console.log(answersState)
    // if selected answer = correct answer, set isCorrect to true, update score state and UI, set button clicked to green 

    // if all isCorrect is false, render the one selected red and update score

  //   setAnswers(prevAnswers => prevAnswers.map(ans => {
  //   return ans.isSelected && ans.answer === correctAnswer ? 
  //     {...ans, 
  //       isCorrect: true
  //     } :
  //     {...ans, 
  //       isCorrect: false
  //     }
  // }))

    // look for the answer that is selected
    // check the text content if it matches with the correct answer
  }


  const renderedQuestions = allQuestions.map((question) => {
    return (
      <Question
        answers={[question.correctAnswer, ...question.incorrectAnswers]}
        correctAnswer={question.correctAnswer}
        question={question.question}
        id={question.id}
        key={question.id}
        pullSelectedAnswers={(e) => checkAnswers(e)} 
      />
    ) 
  })



  return (
    <div
      className='quiz-content-background'
    >
      <div className="quiz-content-container">
        {renderedQuestions}
        <button 
          className='check-ans-button'
          onClick={checkAnswers}
        >Check answers</button>
        {/* <div className="results-container"> 
          <span className='results-text'>You scored 1/5 correct answers</span>
          <button className='play-again-button'>Play again</button>
        </div> */}
      </div>
      <span className='blob-2'></span>
      <span className='blob-1'></span>
    </div>
  )
}