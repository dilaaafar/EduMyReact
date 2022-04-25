import { BrowserRouter,Route,Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import './App.css'

//pages and component
import Dashboard from './pages/dashboard/Dashboard'
import Assignment from './pages/assignment/Assignment'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Subject from './pages/subject/Subject'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Quiz from './pages/quiz/Quiz'
import TeacherQuiz from './pages/quiz/TeacherQuiz'
import Attendance from './pages/attendance/Attendance'
/* import { Routes } from 'react-router-dom'; */

function App() {
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        {user && <Sidebar />}
          <div className="container">
          <Navbar/>
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to ="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route exact path='/quiz'>
              {!user && <Redirect to ="/login" />}
              {user && <Quiz />}
              </Route>
              <Route exact path='/subject'>
              {!user && <Redirect to ="/login" />}
              {user && <Subject/>}
              </Route>
              <Route exact path='/login'>
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route exact path='/signup'>
                {user && <Redirect to="/" />}
                {!user && <Signup/>}
              </Route>
              <Route path='/tcrquiz'>
                {!user && <Redirect to ="/login" />}
                {user && <TeacherQuiz />}
              </Route>
              <Route path='/attendance'>
                {!user && <Redirect to='/login'/>}
                {user && <Attendance />}
              </Route>
              <Route exact path="/" component={Dashboard} />
              <Route path="/subject" component={Subject} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/tcrquiz" component={TeacherQuiz} />
              <Route path="/attendance" component={Attendance} />
            </Switch>
          </div> 

        </BrowserRouter>
      )}
    </div>
  );
}

export default App

/*
login
signup 
dashboard
create
subject
quiz
*/