import React from 'react'
import { render } from 'react-dom'

export default function RenderQuestion(props) {
  // console.log(props)

  const allQuestions = props.questionsFromAPI
  console.log(allQuestions)

  const renderedQuestions = allQuestions.forEach((q) => {
    return (
       <div className='quiz-item-container'>
          <h3 className='quiz-question'>{q.question}</h3>
        <div className='button-container'>
          <button>Answer</button>
        </div>
        <hr></hr>
      </div>
    )
  })

  // const renderedQuestions = allQuestions.map((q) => {
  //   return (
  //     <div className='quiz-item-container'>
  //       <h3 className='quiz-question'>{q.question}</h3>
  //       <div className="button-container">
  //           {/* {renderAnswerButtons} */}
  //       </div>
  //       <hr></hr>
  //     </div>
  //   ) 
  // })

  return (
    {renderedQuestions}
    // <p>test</p>
  )
}


      