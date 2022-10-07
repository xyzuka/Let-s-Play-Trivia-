import React from 'react';
import '../styles/quiz.css';
import { nanoid } from 'nanoid';

export default function Question(props) {
  return <h3 className="quiz-question">{props.question}</h3>;
}
