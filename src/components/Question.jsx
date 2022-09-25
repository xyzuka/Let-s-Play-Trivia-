import React from 'react'
import '../styles/quiz.css'

export default function Question(props) {  
  const answers = [];
  const [correctAnswer, setCorrectAnswer] = React.useState(props.correctAnswer)
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false)

  const renderIfRightWrong = {
    backgroundColor: isAnswerCorrect ? '#a4d99f' : '#ec9898'
  }

  for (let i = 0; i < props.answers.length; i++) {
    answers.push({
      answers: props.answers[i],
      id: props.answers.indexOf(props.answers[i])
    })
  }

  console.log(`Correct answer: ${correctAnswer}`)

  let shuffledAnswers = answers
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

  function checkAnswer(event) {
    const answerSelected = event.currentTarget.textContent

    if (correctAnswer === answerSelected) {
      setIsAnswerCorrect(true)
    } else {
      setIsAnswerCorrect(false)
    }
  }

  const shuffleAnswersRendered = shuffledAnswers.map((item) => {
    return <button 
    className='answer-button' 
    style={renderIfRightWrong}
    key={item.id}
    id={item.id}
    onClick={(event) => checkAnswer(event)}
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