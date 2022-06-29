import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'

export default function TeacherQuiz({quizzes}) {


  return (
    <div>Teacher Quiz
      <div>
        <Link to="./create-quiz ">
        <button className='btn'> + Create Quiz</button>
      </Link>
      </div>
      
      
      {/*quizzes.map(quiz =>(
        <div key={quiz.id} className="card">
          <h2>{quiz.title}</h2>
          
        </div>
      ))*/}
      
    </div>
    
  )
}
=======

export default function TeacherQuiz() {
  return (
    <div>Teacher Quiz</div>
    
  )
}
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
