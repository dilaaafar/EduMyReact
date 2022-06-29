import { useState, useEffect } from 'react'
import { authReducer } from '../context/AuthContext'
import { projectAuth, projectStorage, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

<<<<<<< HEAD
  const signup = async (email, password, confirmPassword, displayName, subject, thumbnail, roles) => {
=======
  const signup = async (email, password, cpassword, displayName, icnumber, thumbnail, roles) => {
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password) //.then((userCredential)=>{
      //console.log(res.user)  
     

      if (!res) {
        throw new Error('Could not complete signup')
      }

      //upload user thumbnail 
<<<<<<< HEAD
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
=======
      const uploadPath = `thumbnails/$ {res.user.uid}/${thumbnail.name}`
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
      const img = await projectStorage.ref(uploadPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()

      // add username to user
      await res.user.updateProfile({ displayName, photoURL: imgUrl })

      // create a user document
      //uses useruuid for creating the users document and make it chain together
      // await projectFirestore.collection('users').doc('Users').collection
      await projectFirestore.collection('users').doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL:imgUrl,
<<<<<<< HEAD
        subject,
=======
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
        roles
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}