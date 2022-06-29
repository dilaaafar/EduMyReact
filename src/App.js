import { BrowserRouter,Route,Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';


<<<<<<< HEAD
import './App.css'

=======
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
//pages and component
import Dashboard from './pages/dashboard/Dashboard'
import Assignment from './pages/assignment/Assignment'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Class from './pages/class/Class'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
<<<<<<< HEAD
import TeacherSidebar from './components/TeacherSidebar';
import OnlineUser from './components/OnlineUser';
import Quiz from './pages/quiz/Quiz'
import TeacherQuiz from './pages/quiz/TeacherQuiz'
import Attendance from './pages/attendance/Attendance'
import MyClass from './pages/class/MyClass';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import PageClassStud from './pages/class/PageClassStud';
import CreateQuiz from './pages/quiz/CreateQuiz';
import AddQuestion from './pages/quiz/AddQuestion'
import ClassListTcr from './components/ClassListTcr';
import PageClassTcr from './pages/class/PageClassTcr';

=======
import Quiz from './pages/quiz/Quiz'
import TeacherQuiz from './pages/quiz/TeacherQuiz'
import Attendance from './pages/attendance/Attendance'
/* import { Routes } from 'react-router-dom'; */
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07

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
<<<<<<< HEAD
                {user && <MyClass />}
=======
                {user && <Dashboard />}
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
              </Route>
              <Route exact path='/quiz'>
              {!user && <Redirect to ="/login" />}
              {user && <Quiz />}
              </Route>
<<<<<<< HEAD
              <Route path='/class'>
                {!user && <Redirect to ="/login" />}
                {user && <Class />}
=======
              <Route exact path='/subject'>
              {!user && <Redirect to ="/login" />}
              {user && <Subject/>}
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
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
<<<<<<< HEAD
              <Route path='/my-class'>
                {!user && <Redirect to='/login'/>}
                {user && <MyClass />}
              </Route>
              <Route path="/class-list/:id">
                {!user && <Redirect to='/login'/>}
                {user && <PageClassStud />}
              </Route>
              <Route path="/class-list-tcr/:id">
                {!user && <Redirect to='/login'/>}
                {user && <PageClassTcr />}
              </Route>
              <Route path="/create-quiz">
                {!user && <Redirect to='/login'/>}
                {user && <CreateQuiz />}
              </Route>
              <Route path='/add-question'>
                {!user && <Redirect to ="/login" />}
                {user && <AddQuestion />}
              </Route>
=======
              <Route exact path="/" component={Dashboard} />
              <Route path="/subject" component={Subject} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/tcrquiz" component={TeacherQuiz} />
              <Route path="/attendance" component={Attendance} />
            </Switch>
          </div> 
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07

              <Route exact path="/" component={Dashboard} />
              <Route path="/class" component={Class} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/tcrdashboard" component={TeacherDashboard}/>
              <Route path="/tcrquiz" component={TeacherQuiz} />
              <Route path="/attendance" component={Attendance} />
              <Route path="/my-class" component={MyClass} />
              <Route path="/class-list/:id" component={PageClassStud} />
              <Route path="/create-quiz" component={CreateQuiz} />
              <Route path="/add-question" component={AddQuestion} />
              <Route path='/class-list-tcr/:id' component={ClassListTcr}/>
            </Switch>
          </div>
          {/* <div>{user && <OnlineUser/>}</div>*/}
          <div>{user && <OnlineUser/>}</div>
          
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