import React from 'react'
import '../styles/quiz.css'

export default function Question(props) {
  const answers = props.answers

  let shuffledAnswers = answers
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

  const shuffleAnswersRendered = shuffledAnswers.map((answer) => {
    return <button 
    className='answer-button' 
    // enter key
    id={answer.id}
    >
      {answer}
    </button>
  })

  return (
        <div className='quiz-item-container'>
          <h3 className='quiz-question'>{props.question}</h3>
          <div className="button-container">
            {shuffleAnswersRendered}
          </div>
          <hr></hr>
        </div>
  )
}