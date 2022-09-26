import React from 'react'
import '../styles/quiz.css'

export default function AnswerButton(props) {
  console.log(props)
  return (
    <button
      className='answer-button'
    >{props.value}</button>
  )
}