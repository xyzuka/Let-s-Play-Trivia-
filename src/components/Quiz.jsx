import React from 'react'
import '../styles/quiz.css'
import Question from './Question'

export default function Quiz() {
  const [allQuestions, setAllQuestions] = React.useState([])

  React.useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions")
      .then(res => res.json())
      .then(data => {
        const firstFiveQuestions = data.slice(0, 1)
        setAllQuestions(firstFiveQuestions)
      })
  }, [])

  const renderedQuestions = allQuestions.map((question) => {
    return (
      <Question
        answers={[question.correctAnswer, ...question.incorrectAnswers]}
        correctAnswer={question.correctAnswer}
        question={question.question}
        id={question.id}
        key={question.id}
        selectAnswer={(event) => selectAnswer(event)}
      />
    ) 
  })

  return (
    <div
      className='quiz-content-background'
    >
      <div className="quiz-content-container">
        {renderedQuestions}
        <button className='check-ans-button'>Check answers</button>
      </div>
      <span className='blob-2'></span>
      <span className='blob-1'></span>
    </div>
  )
}