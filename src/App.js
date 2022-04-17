import { BrowserRouter,Route,Switch } from 'react-router-dom';
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
/* import { Routes } from 'react-router-dom';
import { Redirect } from 'react-router-dom'; */

function App() {
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        <Sidebar />
          <div className="container">
          <Navbar/>
          <Switch>
          <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path='/assignment/:id'>
              <Assignment />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/signup'>
              <Signup/>
            </Route> 
            <Route exact path='/subject'>
              <Subject/>
            </Route>
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