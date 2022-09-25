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
        incorrectAnswers={question.incorrectAnswers}
        question={question.question}
        id={question.id}
        key={question.id}
      />
    ) 
  })

  return (
    <div
      className='quiz-content-background'
    >
      <div className="quiz-content-container">
        {/* <div>
          <h3 className='quiz-question'>How does one say goodbye in Spanish?</h3>
          <div className="button-container">
            <button className='answer-button'>Adiós</button>
            <button className='answer-button'>Hola</button>
            <button className='answer-button'>Au Revoir</button>
            <button className='answer-button'>Bon Voyage</button>
          </div>
          <hr></hr>
        </div> */}
        {renderedQuestions}
      </div>
      <span className='blob-2'></span>
      <span className='blob-1'></span>
    </div>
  )
}