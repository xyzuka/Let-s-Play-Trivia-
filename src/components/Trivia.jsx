import React from 'react'
import '../styles/quiz.css'
// import Question from './Question'
import RenderQuestion from './RenderQuestion'
import { nanoid } from 'nanoid'

export default function Trivia() {
  const [allQuestions, setAllQuestions] = React.useState([])
  const [allAnswers, setAllAnswers] = React.useState([])
  // const [correctAnswer, setCorrectAnswer] = React.useState(props.correctAnswer)
  // const [score, setScore] = React.useState('0')
  // console.log(allQuestions)
  // console.log(answers)
  // console.log(answers)

  React.useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions")
      .then(res => res.json())
      .then(data => {
        const firstFiveQuestions = data.slice(0, 1)
        setAllQuestions(firstFiveQuestions)
      })
  }, [])

  function checkAnswers() {
    console.log('checking answers...')
  }

 const renderedQuestions = allQuestions.map((question) => {
    return (
      <RenderQuestion
        correctAnswer={question.correctAnswer}
        question={question.question}
        id={question.id}
        key={question.id}
      />
    ) 
  })

  console.log(allQuestions)

  return (
    <div className='quiz-content-background'>
      <div className="quiz-content-container">
        {renderedQuestions}
        <button 
          className='check-ans-button'
          onClick={() => checkAnswers()}
        >
          Check answers
        </button>
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