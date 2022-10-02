// import React from 'react'
// import '../styles/quiz.css'
// import AnswerButton from './AnswerButton'
// import { nanoid } from 'nanoid'

// export default function Question(props) {
//   // question props
//   // console.log(props)
//   const [answers, setAnswers] = React.useState(createAnswersArray(props))
//   const [correctAnswer, setCorrectAnswer] = React.useState(props.correctAnswer)

//   function createAnswersArray(answer) {
//     const ansArr = []

//     answer.answers.forEach(ans => {
//       ansArr.push({
//         answer: ans,
//         isSelected: false,
//         isCorrect: false,
//         key: nanoid()
//       })
//     })
//     return ansArr
//   }

// // passing answers to parent component (Quiz.jsx)
// props.pullSelectedAnswers(answers, correctAnswer, setAnswers)

// function selectAnswer(id, answers) {
//   //**  if ID matches set isSelected to true
//   //** if ID does not match set isSelected to false
//   setAnswers(prevAnswers => prevAnswers.map(ans => {
//     return ans.key === id ? 
//       {...ans, 
//         isSelected: true
//       } :
//       {...ans, 
//         isSelected: false
//       }
//   }))
// }

// console.log(answers)

// const renderAnswerButtons = answers.map((ans) => {
//   return <AnswerButton
//     value={ans.answer}
//     isSelected={ans.isSelected}
//     key={ans.key}
//     correctAnswer={correctAnswer}
//     clickAnswer={() => selectAnswer(ans.key, answers)}
//   />
// })

//   return (
//         <div className='quiz-item-container'>
//           <h3 className='quiz-question'>{props.question}</h3>
//           <div className="button-container">
//             {renderAnswerButtons}
//           </div>
//           <hr></hr>
//         </div>
//   )
// }