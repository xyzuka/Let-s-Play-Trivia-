import React from 'react';
import '../styles/quiz.css';

export default function Question(props) {
  return <h3 className="quiz-question">{props.question}</h3>;
}
