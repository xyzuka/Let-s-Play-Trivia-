import React from 'react'
import '../styles/quiz.css'

export default function AnswerButton(props) {
  // console.log(props)

  return (
    <button
      className={props.isSelected ? 'answer-button-selected' : 'answer-button'}
      onClick={props.clickAnswer}
    >
      {props.value}
    </button>
  )
}