import React from 'react'
import '../styles/quiz.css'

export default function Question(props) {
  const shuffledAnswers = props.answers
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

  const renderAnswerBtns = shuffledAnswers.map((ans) => {
    return (
      <button
      key={ans}
      className="answer-button"
      >
        {ans}
      </button>
    )
  })

  return (
        <div className='quiz-item-container'>
          <h3 className='quiz-question'>{props.question}</h3>
          <div className="button-container">
            {renderAnswerBtns}
          </div>
          <hr></hr>
        </div>
  )
}