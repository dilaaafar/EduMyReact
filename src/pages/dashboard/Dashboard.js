import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

<<<<<<< HEAD

import OnlineUser from '../../components/OnlineUser'
import Sidebar from '../../components/Sidebar'

=======
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
//styles
import './Dashboard.css'

import React from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Dashboard() {

  const { user, authIsReady } = useAuthContext()
  return (
    <div>
      Dashboard
<<<<<<< HEAD
     
    </div>
    
    
=======
    </div>
    
>>>>>>> a6925a045c5753b9179939f969eae6b6f81d5a07
  )
}
