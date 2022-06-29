import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import { useAuthContext } from '../hooks/useAuthContext'
//import { useCollection } from '../hooks/useCollection'
import { projectFirestore } from "../firebase/config"
<<<<<<< HEAD
=======
import { useEffect,useState } from 'react'
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07

//style & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import SubjectIcon from '../assets/book.svg'
import QuizIcon from '../assets/quiz.svg'
import AttendanceIcon from '../assets/calendar.svg'

export default function Sidebar() {

const { user } = useAuthContext()
<<<<<<< HEAD
=======
const [users, setUsers] = useState(null)
const [isPending, setIsPending] = useState(false)

useEffect(() => {
    setIsPending (true)

        projectFirestore.collection('shit').doc().get().then((snapshot) =>{
        console.log(snapshot)
        })

}, []) 
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07

  return (
    <div className="sidebar">
        <div className="sidebar-content">
            <div className="sidebar-tajuk">
                <p> EduMy </p>
            </div>
            <div className="user">
                <Avatar src={user.photoURL} />
                <p>{user.displayName}</p>
                
            </div>
        </div>
        
        <nav className="links">
            <ul>
                <li>
<<<<<<< HEAD
                    <NavLink to="/my-class">
=======
                    <NavLink exact to="/">
                        <img src={DashboardIcon} alt="dashboard icon" />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/subject">
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
                        <img src={SubjectIcon} alt="subject icon" />
                        <span>My Class</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/quiz">
                        <img src={QuizIcon} alt="quiz icon" />
                        <span>Quiz</span>
                    </NavLink>
                </li>
                <li>
<<<<<<< HEAD
                    <NavLink to="/class">
                        <img src={SubjectIcon} alt="subject icon" />
                        <span>Class</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tcrquiz">
                        <img src={QuizIcon} alt="quiz icon" />
                        <span>Create Quiz</span>
=======
                    <NavLink to="/tcrquiz">
                        <img src={QuizIcon} alt="quiz icon" />
                        <span>Teacher Quiz</span>
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/attendance">
                        <img src={AttendanceIcon} alt="attendance icon" />
                        <span>Attendance Link</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
