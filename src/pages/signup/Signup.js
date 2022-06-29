<<<<<<< HEAD
import {useRef, useState, useEffect } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { projectFirestore } from '../../firebase/config'
=======
import { useState, useEffect } from 'react'
import { useSignup } from '../../hooks/useSignup'
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
import Select from 'react-select'
//styles
import './Signup.css'
import { useAuthContext } from '../../hooks/useAuthContext'

const roles_ = [
  {value: 'teacher', label: 'Teacher'},
  {value: 'student', label: 'Student'},
]

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/;

const roles_ = [
  {value: 'teacher', label: 'Teacher'},
  {value: 'student', label: 'Student'},
]

export default function Signup() {

<<<<<<< HEAD
  const userRef = useRef();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [isError, setIsError] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [roles, setRoles] = useState('')
  const [isTeacher, setIsTeacher] = useState(false)
  const [subject, setSubject] = useState([])
  const [thumbnail, setThumbnail] = useState('')
  const [thumbnailError, setThumbnailError] = useState(null)
  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  

  const { signup, isPending, error } = useSignup()
  const { user } = useAuthContext()
  
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd])

  useEffect(() => {
      setErrMsg('');
  }, [password, matchPwd])

//const v1 = PWD_REGEX.test(password);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, confirmPassword, displayName, subject, thumbnail, roles.value)

    {/*useEffect(() => {
      if (user)
        await projectfirestore.collection("users").where("role", "==", (user?.role === "student" ? "teacher" : "student"))
          .onSnapshot(users => {
              if (!users.empty) {
                const USERS = []

                users.forEach(user => {
                    USERS.push(user.data())
                })

                setUsers(USERS)
            }
          })
    }, [user])*/}
    
=======
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setConfirmPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [icnumber, setICnumber] = useState('')
  const [roles, setRoles] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [thumbnailError, setThumbnailError] = useState(null)

  const { signup, isPending, error } = useSignup()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, cpassword, displayName, icnumber, thumbnail, roles.value) 
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
    // make sure the order of the element match 
    //the order of element in useSignup.js
  }
  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {  //kalau x upload image
      setThumbnailError("Please select a file")
      return
    }
    if (!selected.type.includes('image')){ //kalau file dipilih bukan image
      setThumbnailError('Selected file must be an image')
      return
    }  
    if(selected.size > 500000) {  //kalau image more than 500kB
      setThumbnailError('Image file size must be less than 500kB')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbnail updated')
  }

  const checkValidation=(e) => {
    const confPass = e.target.value;
    setConfirmPassword(confPass);
    if(password !== confPass){
      setIsError("Password does not match")
      return
    }
    setIsError(null)
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
          <span>Email:</span>
          <input 
            required 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:    
            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
          </span>
          <input 
            required 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span> <span aria-label="underscore">_</span>
          </p>
        </label>
        <label>
          <span>Confirm password:</span>
          <input 
            required 
            type="password"
            onChange={(e) => checkValidation(e)}
            value={confirmPassword}
          />
          {isError &&  <div classname="error">{isError}</div>}
        </label>
        <label>
          <span>Username:</span>
          <input 
            required 
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>Profile thumbnail:</span>
          <input 
            required 
            type="file"
            onChange={handleFileChange}
          />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
        <label className="roles">
          <span>roles:</span>
          <Select
            onChange={(option) => setRoles(option)}
            options={roles_}/>
        </label>
        {!isPending && <button className="btn">Sign Up</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <div className="error">{error}</div>}
    </form>
  )
}
