import { useContext } from "react"
import { Navigate } from "react-router-dom"
import StoreContext from "../../Store/Context"

export default function RoutePrivate ({ children }) {
  const { user } = useContext(StoreContext)

  return user ? children : <Navigate to="/login" />
}