import { useCallback, useState, useContext } from "react"
import SelectCarmodel from "../../components/Layout/Form/Select/SelectCarmodel"
import SelectBrand from "../../components/Layout/Form/Select/SelectBrand"
import ModalConfirm from "../../components/Layout/Form/Modal/Confirm"
import StorageContext from "../../components/Store/Context"
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
    api.delete(`/carmodels/${values.carmodel_id}`, { 
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }).then(() => {
      setStatus({check: true, message: 'Modelo deletado com sucesso.'})
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
        <h2 className="card-title md-3">Excluir modelo</h2>
        {status.check == true && (
          <span 
            className={status.error == true ? "alert alert-danger" : "alert alert-success"} 
            role="alert"
            >
            {status.message}
          </span>
        )}
        <fieldset className="row g-3 mb-3">
          <div className="col">
            <label htmlFor="brand_id" className="form-label">Marca</label>
            <SelectBrand 
              name="brand_id" 
              onChange={onChange} 
              required
            />
          </div>
          <div className="col">
            <label htmlFor="carmodel_id" className="form-label">Modelo</label>
            <SelectCarmodel 
              name="carmodel_id" 
              brand={values.brand_id}
              onChange={onChange} 
              required
            />
          </div>
        </fieldset>

        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirm">
          Deletar
        </button>

        <ModalConfirm />
      </form>
    </section>
  )
}