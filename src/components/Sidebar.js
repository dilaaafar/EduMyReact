import { NavLink } from 'react-router-dom'

//style & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import SubjectIcon from '../assets/book.svg'
import QuizIcon from '../assets/quiz.svg'

import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-content">
            {/*avatar and username here later*/}
            <div className="sidebar-tajuk">
            <p>EduMy</p>
            </div>
        </div>
        <nav className="links">
            <ul>
                <li>
                    <NavLink exact to="/">
                        <img src={DashboardIcon} alt="dashboard icon" />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={SubjectIcon} alt="subject icon" />
                        <span>Subject</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <img src={QuizIcon} alt="quiz icon" />
                        <span>Quiz</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
