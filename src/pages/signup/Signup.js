import {useState} from 'react'
import { useSignup } from '../../hooks/useSignup'
//styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setConfirmPassword] = useState('')
  const [username, setuserName] = useState('')
  const [icnumber, setICnumber] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [thumbnailError, setThumbnailError] = useState(null)
  const { signup, isPending, error } = useSignup()


  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, cpassword, username, icnumber, thumbnail)   
    // make sure the order of the element match 
    //the order of element in useSignup.js
  }
  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setThumbnailError("Please select a file")
      return
    }
    if (!selected.type.includes('image')){
      setThumbnailError('Selected file must be an image')
      return
    }
    if(selected.size > 100000) {
      setThumbnailError('Image file size must be less than 100kB')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbnail updated')
  }
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
          <span>email:</span>
          <input 
            required 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input 
            required 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>confirm password:</span>
          <input 
            required 
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={cpassword}
          />
        </label>
        <label>
          <span>username:</span>
          <input 
            required 
            type="text"
            onChange={(e) => setuserName(e.target.value)}
            value={username}
          />
        </label>
        <label>
          <span>identification number:</span>
          <input 
            required 
            type="text"
            onChange={(e) => setICnumber(e.target.value)}
            value={icnumber}
          />
        </label>
        <label>
          <span>profile thumbnail:</span>
          <input 
            required 
            type="file"
            onChange={handleFileChange}
          />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
        {!isPending && <button className="btn">Sign Up</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <div className="error">{error}</div>}
    </form>
  )
}
