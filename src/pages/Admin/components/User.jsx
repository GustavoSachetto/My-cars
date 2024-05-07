import { useEffect, useState, useContext } from "react"
import StoreContext from "../../../components/Store/Context"
import api from "../../../services/api"

export default function User() {
  const { user } = useContext(StoreContext)
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  function formatterBool(value) {
    return value === true ? "Sim" : "Não"
  }
  
  useEffect(() => {
    setLoading(true)
    setUsers([])

    api.get("/users", {
      auth: {
        username: user.email,
        password: user.password
      },
    }).then((response) => {
      setUsers(response.data)
      setLoading(false)
    }).catch((response) => {
      setError({error: true, message: response.response.data.error})
      setLoading(false)
    })
  }, [])

  return (
    <section className="card px-3 py-4 rounded-4 border-0 shadow-sm" style={{width: "80%"}}>
       {loading ? (
        <div>
          <span className="spinner-border spinner-border-sm me-2" role="status" />
          <span className="fs-5 fw-light">Carregando informações...</span>
        </div>
      ) : (
        Array.isArray(users) && users.length > 0 ? (
          <>
            <h2 className="card-title mb-3">Usuários</h2>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Email</th>
                  <th scope="col">Acesso Admin</th>
                </tr>
              </thead>
              <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{formatterBool(user.admin_access)}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </>
        ) : (
          <span className="fs-5 fw-light">{error.message}</span>
        )
      )}
    </section>
  )
}