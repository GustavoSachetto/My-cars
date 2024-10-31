import { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

function initialUserState() {
  return {email: '', password: '', checkbox: false}
}

function initialStatusState() {
  return {check: false, message: '', error: false}
}

export default function Create() {
  const [values, setValues] = useState(initialUserState)
  const [status, setStatus] = useState(initialStatusState)

  const handleSubmit = useCallback(() => {
    api.post("/users", values).then((response) => {
      setStatus({
        check: true,
        error: false, 
        message: 'Usuário cadastrado com sucesso'
      })      
    }).catch((response) => {
      setStatus({
        check: true, 
        error: true, 
        message: response.response.data.error
      })
    })
  }, [values])

  function onChange(event) {
    const { value, name } = event.target

    setValues({
      ...values,
      [name]: value 
    })
  }
  
  function onSubmit(e) {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <article className="d-flex mt-2 p-5 flex-wrap justify-content-center">
      <section style={{width: "520px"}}>
        <form className="card px-3 py-4 rounded-4 border-0 shadow-sm w-100" onSubmit={(e) => onSubmit(e)}>
        <h2 className="card-title mb-3">Cadastrar</h2>
        {status.check == true && (
          <span 
            className={status.error == true ? "alert alert-danger" : "alert alert-success"} 
            role="alert"
            >
            {status.message}
          </span>
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome completo</label>
          <input 
            id="name" 
            type="name" 
            name="name" 
            className="form-control"
            placeholder="Example Your Name" 
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Endereço de email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            className="form-control"
            placeholder="example@email.com" 
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <div className="input-group">
            <input 
              id="password" 
              type="text"
              name="password" 
              className="form-control" 
              placeholder="****"
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success mb-2">Enviar</button>
        <hr />
        <div>
          <span>Já possui conta? </span>
          <Link to="/login">Logar</Link>
        </div>
        </form>
      </section>
    </article>
  )
}