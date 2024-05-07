import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { useCallback, useState, useContext } from "react"
import StoreContext from "../../../components/Store/Context"
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
  const { setUserSession } = useContext(StoreContext)

  const handleSubmit = useCallback(() => {
    api.post("/admin/auth", values).then((response) => {
      setUserSession({ 
        email: values.email, 
        password: values.password, 
        token: response.data.token, 
        admin_access: true 
      })
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
    <section style={{width: "520px"}}>
      <form className="card px-3 py-4 bg-dark rounded-4 border-0 shadow-sm" onSubmit={(e) => onSubmit(e)}>
        <h2 className="card-title mb-3 text-white">Admin</h2>
        {error.status == true && (
          <span className="alert alert-danger" role="alert">{error.message}</span>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">Endereço de email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            className="form-control"
            placeholder="exemple@email.com" 
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label text-white">Senha</label>
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
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </section>
  )
}