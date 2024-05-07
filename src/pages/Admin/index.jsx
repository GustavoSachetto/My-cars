import { useContext } from "react"
import StoreContext from "../../components/Store/Context"
import Login from "./components/Login"
import User from "./components/User"

export default () => {
  const { user } = useContext(StoreContext)

  return (
    <article className="d-flex mt-2 p-5 w-100 flex-wrap justify-content-center">
      {user !== null && user.admin_access === true ? (
        <User />
      ) : (
        <Login />
      )}
    </article>
  )
}