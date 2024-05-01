import { useContext } from "react"
import StoreContext from "../../../components/Store/Context"

export default function Logout() {
  const { user, clearUser } = useContext(StoreContext)
     
  function onSubmit(e) {
    e.preventDefault()
    clearUser()
  }

  return (
    <form className="card px-3 py-4 rounded-4 border-0 shadow-sm w-100" onSubmit={(e) => onSubmit(e)}>
      <h2 className="card-title mb-3">Conta</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Usuário <strong>{user.email}</strong> logado com sucesso!</label>
      </div>
      <button type="submit" className="btn btn-danger">Sair</button>
    </form>
  )
}