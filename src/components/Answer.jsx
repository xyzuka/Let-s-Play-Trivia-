import React from 'react';
import '../styles/quiz.css';

export default function Answer(props) {
  console.log(props);

  let answerButtonClassName = 'answer-button';

  if (props.isSelected) answerButtonClassName = 'answer-button-selected';

  if (props.isSelected && props.isCorrect && props.areAnswersChecked)
    answerButtonClassName = 'answer-button-correct';

  if (props.isSelected && !props.isCorrect && props.areAnswersChecked)
    answerButtonClassName = 'answer-button-incorrect';

  return (
    <button
      // className={props.isSelected ? 'answer-button-selected' : 'answer-button'}
      className={answerButtonClassName}
      // style={renderResult}
      // className='answer-button'
      onClick={props.selectAnswer}
    >
      {props.answer}
    </button>
  );
}
