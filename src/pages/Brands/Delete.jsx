import { useCallback, useState, useContext } from "react"
import SelectBrand from "../../components/Layout/Form/Select/SelectBrand"
import StorageContext from "../../components/Store/Context"
import ModalConfirm from "../../components/Layout/Form/Modal/Confirm"
import api from "../../services/api"

function initialStatus() {
  return {check: false, message: '', error: false}
}

export default function Delete() {
  const [values, setValues] = useState({})
  const [status, setStatus] = useState(initialStatus)
  const { user } = useContext(StorageContext)
  
  function onChange(event) {
    const { name, value } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = useCallback(() => {
    api.delete(`/brands/${values.brand_id}`, { 
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }).then(() => {
      setStatus({check: true, message: 'Marca deletada com sucesso.'})
    }).catch((response) => {
      setStatus({check: true, message: response.response.data.error, error: true})
    })
  }, [values])

  function onSubmit(e) {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <section className="d-flex mt-2 p-5 flex-wrap justify-content-center">
      <form className="card px-3 py-4 rounded-4 border-0 shadow-sm" style={{width: "800px"}} onSubmit={(e) => onSubmit(e)}>
        <h2 className="card-title md-3">Excluir marca</h2>
        {status.check == true && (
          <span 
            className={status.error == true ? "alert alert-danger" : "alert alert-success"} 
            role="alert"
            >
            {status.message}
          </span>
        )}
        <fieldset className="mb-3">
          <label htmlFor="brand_id" className="form-label">Marca</label>
          <SelectBrand 
            name="brand_id" 
            onChange={onChange} 
            required
          />
        </fieldset>

        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirm">
          Deletar
        </button>

        <ModalConfirm />
      </form>
    </section>
  )
}