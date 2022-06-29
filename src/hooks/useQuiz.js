import React from 'react'
import { projectAuth, projectStorage, projectFirestore } from '../firebase/config'
import { useState, useEffect } from 'react'
import '../firebase/config'

{/*export const useQuiz = () => {
  const [isCancelled, setIsCancelled] = useState(false)

    const createQuiz = async (currentQuizId, subject, title, description) => {
      await projectFirestore().collection('quizzes').doc(currentQuizId).set({
        subject,
        title,
        description,
      });

    }


useEffect(() => {
  return () => setIsCancelled(true)
  }, [])

  return {createQuiz}
}*/}

export const createQuiz = (currentQuizId, subject, title, description) => {
  return projectFirestore().collection('Quizzes').doc(currentQuizId).set({
    title,
    description,
  });
};
  
  // Create new question for current quiz
 export const createQuestion = (currentQuizId, currentQuestionId, question) => {
    return projectFirestore()
      .collection('Quizzes')
      .doc(currentQuizId)
      .collection('QNA')
      .doc(currentQuestionId)
      .set(question);
  };
  
  // Get All Quizzes
  export const getQuizzes = () => {
    return projectFirestore().collection('Quizzes').get();
  };
  
  // Get Quiz Details by id
  export const getQuizById = currentQuizId => {
    return projectFirestore().collection('Quizzes').doc(currentQuizId).get();
  };
  
  // Get Questions by currentQuizId
  export const getQuestionsByQuizId = currentQuizId => {
    return projectFirestore()
      .collection('Quizzes')
      .doc(currentQuizId)
      .collection('QNA')
      .get();
}