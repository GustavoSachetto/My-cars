import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { useCallback, useState, useContext } from "react"
import StoreContext from "../../../components/Store/Context"
import { Link } from "react-router-dom"
import api from "../../../services/api"

function initialUserState() {
  return {email: '', password: '', checkbox: false}
}

function initialErrorState() {
  return {status: false, message: ''}
}

export default function Login() {
  const [typePassword, setTypePassword] = useState('password')
  const [buttonIcon, setbuttonIcon] = useState(<FaEyeSlash size={18} />)
  const [values, setValues] = useState(initialUserState)
  const [error, setError] = useState(initialErrorState)
  const { setUserSession, setUserLocal } = useContext(StoreContext)

  const handleSubmit = useCallback(() => {
    api.post("/auth", values).then((response) => {
      setError({
        status: false,
        message: 'Usuário logado com sucesso'
      })

      if (values.checkbox === true) {
        setUserLocal({ token: response.data.token, email: values.email })
      } else {
        setUserSession({ token: response.data.token, email: values.email })
      }
      
    }).catch((response) => {
      setError({
        status: true, 
        message: response.response.data.error
      })
    })
  }, [values])
  
  function setInputType() {
    if (typePassword == 'password') {
      setTypePassword('text')
      setbuttonIcon(<FaEye size={18} />)
    } else {
      setTypePassword('password')
      setbuttonIcon(<FaEyeSlash size={18} />)
    }
  }

  function onChange(event) {
    const { value, name, type, checked } = event.target

    setValues({
      ...values,
      [name]: type == "checkbox" ? checked : value 
    })
  }
  
  function onSubmit(e) {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <form className="card px-3 py-4 rounded-4 border-0 shadow-sm w-100" onSubmit={(e) => onSubmit(e)}>
      <h2 className="card-title mb-3">Entrar</h2>
      {error.status == true && (
        <span className="alert alert-danger" role="alert">{error.message}</span>
      )}
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
            type={typePassword}
            name="password" 
            className="form-control" 
            placeholder="****"
            onChange={onChange}
          />
          <button className="btn btn-secondary" onClick={() => {setInputType()}} type="button">
            {buttonIcon}
          </button>
        </div>
      </div>
      <div className="mb-3 form-check">
        <input 
          id="checkbox" 
          type="checkbox" 
          name="checkbox"
          className="form-check-input" 
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="checkbox">Permanecer conectado</label>
      </div>
      <button type="submit" className="btn btn-primary mb-2">Enviar</button>
      <hr />
      <div>
        <span>Não possui conta? </span>
        <Link to="/login/new">Cadastrar-se</Link>
      </div>
    </form>
  )
}