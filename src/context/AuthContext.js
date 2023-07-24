import React, { useContext, useState, useEffect } from "react"

import { useHistory } from "react-router-dom"

import { auth } from "../firebase"


const AuthContext = React.createContext()

export function useAuth() { return useContext(AuthContext) }

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [currentUser, setcurrentUser] = useState()
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setcurrentUser(user)
      setLoading(false)
      history.push('/Home')
    })
    console.log(currentUser)
  }, [currentUser, history])

  const value = { currentUser }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
 ``   </AuthContext.Provider>
  )
}