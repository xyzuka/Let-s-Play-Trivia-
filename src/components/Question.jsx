import React from 'react'
import '../styles/quiz.css'
import { nanoid } from 'nanoid'

export default function Question(props) {
  const answers = [];

  for (let i = 0; i < props.answers.length; i++) {
    answers.push({
      answers: props.answers[i],
      id: props.answers.indexOf(props.answers[i])
    })
  }

  let shuffledAnswers = answers
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

  const shuffleAnswersRendered = shuffledAnswers.map((item) => {
    return <button 
    className='answer-button' 
    key={item.id}
    id={item.id}
    >
      {item.answers}
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