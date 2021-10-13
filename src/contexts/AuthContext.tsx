import React, { useContext } from "react"

const AuthContext = React.createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: any) {
//   const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)

  function signup(/* email, password */) {
  }

  function login(/* email, password */) {
  }

  function logout() {
  }

  const value = {
    // currentUser,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {
      //!loading && 
       children}
    </AuthContext.Provider>
  )
}