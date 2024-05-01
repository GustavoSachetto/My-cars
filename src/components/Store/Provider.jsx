import React from "react"
import Context from "./Context"
import { useSessionStorage, useLocalStorage } from "../../utils/useStorage"

export default function StoreProvider ({ children }) {
  const [userLocal, setUserLocal] = useLocalStorage('user', null)
  const [userSession, setUserSession] = useSessionStorage('user', null)

  function getUser() {
    return userSession !== null ? userSession : userLocal
  }

  const user = getUser();

  function clearUser() {
    setUserLocal(null)
    setUserSession(null)
  }

  return (
    <Context.Provider value={{ user, setUserLocal, setUserSession, clearUser }}>
      { children }
    </Context.Provider>
  )
}