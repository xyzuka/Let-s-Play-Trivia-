import React from 'react'
import '../styles/quiz.css'
import AnswerButton from './AnswerButton'
import { nanoid } from 'nanoid'

export default function Question(props) {
  // question props
  // console.log(props)
  const [answers, setAnswers] = React.useState(createAnswersArray(props))
  const [correctAnswer, setCorrectAnswer] = React.useState(props.correctAnswer)

  function createAnswersArray(answer) {
    const ansArr = []

    answer.answers.forEach(ans => {
      ansArr.push({
        answer: ans,
        isSelected: false,
        key: nanoid()
      })
    })

    return ansArr
  }

  console.log(answers)
  console.log(correctAnswer)

const renderAnswerButtons = answers.map((ans) => {
  return <AnswerButton
    value={ans.answer}
    isSelected={ans.isSelected}
    key={ans.key}
    correctAnswer={correctAnswer}
  />
})


  return (
        <div className='quiz-item-container'>
          <h3 className='quiz-question'>{props.question}</h3>
          <div className="button-container">
            {renderAnswerButtons}
          </div>
          <hr></hr>
        </div>
  )
}