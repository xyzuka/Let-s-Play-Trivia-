import { nanoid } from 'nanoid';
import arrayShuffle from 'array-shuffle';

// Maps over answers Array(of strings) returning an Array of Objects
function formatAnswers(ansArr, correctAns) {
  const formattedAnswer = ansArr.map((ans) => {
    const answerObj = {
      id: nanoid(),
      answer: ans,
      isSelected: false,
      isCorrect: false,
    };

    if (ans === correctAns) {
      return { ...answerObj, isCorrect: true };
    }

    return answerObj;
  });

  return arrayShuffle(formattedAnswer);
}

function formatQuizItems(quizData) {
  return quizData.map((quizItem) => {
    const answers = [...quizItem.incorrectAnswers, quizItem.correctAnswer];

    return {
      id: nanoid(),
      question: quizItem.question,
      answers: formatAnswers(answers, quizItem.correctAnswer),
      correct_answer: quizItem.correctAnswer,
    };
  });
}

export { formatQuizItems };
