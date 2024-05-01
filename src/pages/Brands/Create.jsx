import { useCallback, useState, useContext } from "react"
import StorageContext from "../../components/Store/Context"
import api from "../../services/api"

function initialStatus() {
  return {check: false, message: '', error: false}
}

export default function Create() {
  const [value, setValue] = useState({})
  const [status, setStatus] = useState(initialStatus)
  const { user } = useContext(StorageContext)
  
  function onChange(event) {
    const { name, value } = event.target

    setValue({
      ...value,
      [name]: value
    })
  }

  const handleSubmit = useCallback(() => {
    api.post("/brands", value, { 
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }).then(() => {
      setStatus({check: true, message: 'Marca cadastrada com sucesso.'})
    }).catch((response) => {
      setStatus({check: true, message: response.response.data.error, error: true})
    })
  }, [value])

  function onSubmit(e) {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <section className="d-flex mt-2 p-5 flex-wrap justify-content-center">
      <form className="card px-3 py-4 rounded-4 border-0 shadow-sm" style={{width: "800px"}} onSubmit={(e) => onSubmit(e)}>
        <h2 className="card-title md-3">Adicionar marca</h2>
        {status.check == true && (
          <span 
            className={status.error == true ? "alert alert-danger" : "alert alert-success"} 
            role="alert"
            >
            {status.message}
          </span>
        )}
        <fieldset className="mb-3">
          <label htmlFor="name" className="form-label">Nome</label>
          <input 
            type="text" 
            name="name" 
            minLength={3}
            maxLength={25}
            placeholder="Chevrolet"
            className="form-control"
            required 
            onChange={onChange}
          />
        </fieldset>
        <button type="submit" className="btn btn-success">Cadastrar</button>
      </form>
    </section>
  )
}