import React from 'react'
import { Route } from 'react-router-dom'
import {useQuiz, createQuestion} from '../../hooks/useQuiz'
import { useState } from 'react'
import { projectStorage, projectFirestore } from '../../firebase/config'

export default function AddQuestion({navigation, route}) {

  const [currentQuizId, setCurrentQuizId] = useState(
    route.params.currentQuizId,
  );
  const [currentQuizTitle, setCurrentQuizTitle] = useState(
    route.params.currentQuizTitle,
  );

  const [question, setQuestion] = useState('');
  const [imageUri, setImageUri] = useState('');

  const [correctAnswer, setCorrectAnswer] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [optionThree, setOptionThree] = useState('');
  const [optionFour, setOptionFour] = useState('');

  //const {useQuiz} = createQuestion()

  const handleQuestionSave = async () => {
    if (
      question === '' ||
      correctAnswer === '' ||
      optionTwo === '' ||
      optionThree === '' ||
      optionFour === ''
    ) {
      return;
    }

    let currentQuestionId = Math.floor(
      100000 + Math.random() * 9000,
    ).toString();

    let imageUrl = '';

    if (imageUri !== '') {
      const reference = projectStorage().ref(
        `/images/questions/${currentQuizId}_${currentQuestionId}`,
      );
      await reference.putFile(imageUri).then(() => {
        console.log('Image Uploaded');
      });
      imageUrl = await reference.getDownloadURL();
    }

    await createQuestion(currentQuizId, currentQuestionId, {
      question: question,
      correct_answer: correctAnswer,
      incorrect_answers: [optionTwo, optionThree, optionFour],
      imageUrl: imageUrl,
    });

    setQuestion('');
    setCorrectAnswer('');
    setOptionTwo('');
    setOptionThree('');
    setOptionFour('');
    setImageUri('');
  };

  return (
    <div>
      AddQuestion
    </div>
  )
}
