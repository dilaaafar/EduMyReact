import React from 'react'
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