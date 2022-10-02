import React from 'react'
import '../styles/quiz.css'
// import Question from './Question'
import RenderQuestion from './RenderQuestion'

export default function Quiz() {
  const [allQuestions, setAllQuestions] = React.useState([])
  // const [score, setScore] = React.useState('0')
  // console.log(allQuestions)

  React.useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions")
      .then(res => res.json())
      .then(data => {
        const firstFiveQuestions = data.slice(0, 2)
        setAllQuestions(firstFiveQuestions)
      })
  }, [])

  function checkAnswers() {
    console.log('checking answers...')
  }

  return (
    <div className='quiz-content-background'>
      <div className="quiz-content-container">
        {/* {renderedQuestions} */}
        <RenderQuestion 
          questionsFromAPI={allQuestions}
        />
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