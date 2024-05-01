import { useContext } from "react"
import StoreContext from "../../components/Store/Context"
import Login from "./components/Login"
import Logout from "./components/Logout"

export default () => {
  const { user } = useContext(StoreContext)

  return (
    <article className="d-flex mt-2 p-5 flex-wrap justify-content-center">
      <section style={{width: "520px"}}>
        {user === null ? (
          <Login />
        ) : (
          <Logout />
        )}
      </section>
    </article>
  )
}