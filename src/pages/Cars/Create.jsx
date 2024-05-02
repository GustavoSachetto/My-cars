import { useCallback, useState } from "react"
import SelectFuel from "../../components/Layout/Form/Select/SelectFuel"
import SelectBrand from "../../components/Layout/Form/Select/SelectBrand"
import SelectCarmodel from "../../components/Layout/Form/Select/SelectCarmodel"
import SelectTransmission from "../../components/Layout/Form/Select/SelectTransmission"
import Checkbox from "../../components/Layout/Form/Checkbox"
import api from "../../services/api"

function initialStatus() {
  return {check: false, message: '', error: false}
}

export default function CreateCars() {
  const [values, setValues] = useState({})
  const [status, setStatus] = useState(initialStatus)
  
  function onChange(event) {
    const { name, type, checked, value } = event.target

    setValues({
      ...values,
      [name]: type == "checkbox" ? checked : value
    })
  }

  const handleSubmit = useCallback(() => {
    api.post("/cars", values).then(() => {
      setStatus({check: true, message: "Veiculo cadastrado com sucesso."})
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
      <form className="card px-3 py-4 rounded-4 border-0 shadow-sm needs-validation" onSubmit={(e) => onSubmit(e)} style={{width: "1500px"}}>
        <h2 className="card-title md-3">Adicionar veículo</h2>

        <fieldset className="row g-3 mb-2">
          <div className="col-sm-5">
            <label htmlFor="version" className="form-label">Versão</label>
            <input 
              type="text" 
              name="version" 
              className="form-control"
              minLength={3}
              maxLength={50}
              placeholder="Versão"
              required 
              onChange={onChange}
            />
          </div>
          <div className="col">
            <label htmlFor="price" className="form-label">Preço</label>
            <input 
              type="number"
              name="price"
              className="form-control"
              step={0.01}
              min={0.01}
              max={999999999.99}
              placeholder="Valor"
              required 
              onChange={onChange}
            />
          </div>
          <div className="col">
            <label htmlFor="bodywork" className="form-label">Carroceria</label>
            <input 
              type="text" 
              name="bodywork" 
              className="form-control"
              maxLength={20}
              placeholder="Sedan" 
              required 
              onChange={onChange}
            />
          </div>
        </fieldset>

        <fieldset className="row g-3 mb-2">
          <div className="col">
            <label htmlFor="primary_image" className="form-label">
              <span>Imagem - </span> 
              <span className="text-danger">Obrigatório</span>
            </label>
            <input 
              type="text" 
              name="primary_image" 
              className="form-control"
              maxLength={255}
              placeholder="Url" 
              required 
              onChange={onChange}
            />
            <img src={values.primary_image} className="mt-3 rounded-2 shadow-sm" style={{width: "100%"}} />
          </div>
          <div className="col">
            <label htmlFor="secondary_image" className="form-label">Imagem dois - opcional</label>
            <input 
              type="text" 
              name="secondary_image" 
              className="form-control"
              maxLength={255}
              placeholder="Url" 
              onChange={onChange}
            />
            <img src={values.secondary_image} className="mt-3 rounded-2 shadow-sm" style={{width: "100%"}} />
          </div>
          <div className="col">
            <label htmlFor="tertiary_image" className="form-label">Imagem três - opcional</label>
            <input 
              type="text" 
              name="tertiary_image"
              className="form-control"
              maxLength={255}
              placeholder="Url" 
              onChange={onChange}
            />
            <img src={values.tertiary_image} className="mt-3 rounded-2 shadow-sm" style={{width: "100%"}} />
          </div>
        </fieldset>

        <fieldset className="row g-3 mb-2">
          <div className="col">
            <label htmlFor="brand_id" className="form-label">Marca</label>
            <SelectBrand 
              name="brand_id"
              onChange={onChange} 
              required 
            />
          </div>
          <div className="col mb-2">
            <label htmlFor="model_id" className="form-label">Modelo</label>
            <SelectCarmodel 
              name="model_id" 
              brand={values.brand_id} 
              onChange={onChange} 
              required 
            />
          </div>
          <div className="col">
            <label htmlFor="fuel_id" className="form-label">Combustível</label>
            <SelectFuel 
              name="fuel_id" 
              onChange={onChange} 
              required 
            />
          </div>
        </fieldset>

        <fieldset className="row g-3 mb-2">
          <div className="col">
            <label htmlFor="transmission_id" className="form-label">Transmissão</label>
            <SelectTransmission 
              name="transmission_id" 
              onChange={onChange} 
              required 
            />
          </div>
          <div className="col">
            <label htmlFor="production_year" className="form-label">Ano</label>
            <div className="input-group">
              <input 
                type="number"
                name="production_year" 
                className="form-control"
                min={1886}
                max={values.realease_year}
                placeholder="Produção"
                required
                onChange={onChange}
              />
              <input 
                type="number"
                name="release_year" 
                className="form-control"
                min={values.production_year}
                max={2024}
                placeholder="Lançamento"
                required
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="doors" className="form-label">Número de portas</label>
            <input 
              type="number" 
              name="doors"
              className="form-control"
              placeholder="4"
              max={120}
              required
              onChange={onChange}
            />
          </div>
          <div className="col">
            <label htmlFor="motor" className="form-label">Motor</label>
            <input 
              type="number" 
              name="motor"
              className="form-control"
              step={0.1}
              max={9.9}
              placeholder="1.8"
              required
              onChange={onChange}
            />
          </div>
        </fieldset>

        <fieldset className="row g-3 mb-4">
          <div className="col">
            <label htmlFor="automatic_pilot" className="form-label">Informações especificas</label>
            <div className="form-check form-switch mb-2">
              <Checkbox 
                name="automatic_pilot" 
                onChange={onChange} 
              />
              <label htmlFor="automatic_pilot" className="form-check-label">Piloto automatico</label>
            </div>
            <div className="form-check form-switch mb-2">
              <Checkbox 
                name="air_conditioner"
                onChange={onChange}
              />
              <label htmlFor="air_conditioner" className="form-check-label">Ar-condicionado</label>
            </div>
            <div className="form-check form-switch mb-2">
              <Checkbox 
                name="automatic_glass" 
                onChange={onChange}
              />
              <label htmlFor="automatic_glass" className="form-check-label">Vidro automatico</label>
            </div>
            <div className="form-check form-switch mb-2">
              <Checkbox 
                name="auxiliary_input"
                onChange={onChange}
              />
              <label htmlFor="auxiliary_input" className="form-check-label">Entrada auxiliar</label>
            </div>
            <div className="form-check form-switch">
              <Checkbox 
                name="auxiliary_input"
                onChange={onChange}
              />
              <label htmlFor="mp3_reader" className="form-check-label">Leitor MP3</label>
            </div>
          </div>
          <div className="col">
            <div className="form-check form-switch mb-2" style={{marginTop: "30px"}}>
              <Checkbox 
                name="am_fm"
                onChange={onChange}
              />
              <label htmlFor="am_fm" className="form-check-label">Rádio AM/FM</label>
            </div>
            <div className="form-check form-switch mb-2">
              <Checkbox 
                name="bluetooth"
                onChange={onChange}
              />
              <label htmlFor="bluetooth" className="form-check-label">Bluetooth</label>
            </div>
            <div className="form-check form-switch mb-2">
              <Checkbox 
                name="cd_player"
                onChange={onChange}
              />
              <label htmlFor="cd_player" className="form-check-label">CD Player</label>
            </div>
            <div className="form-check form-switch mb-2">
              <Checkbox 
                name="dvd_player"
                onChange={onChange}
              />
              <label htmlFor="dvd_player" className="form-check-label">DVD Player</label>
            </div>
            <div className="form-check form-switch">
              <Checkbox 
                name="usb_port"
                onChange={onChange}
              />
              <label htmlFor="usb_port" className="form-check-label">Entrada USB</label>
            </div>
          </div>
        </fieldset>
        
        {status.check == true && (
          <span 
            className={status.error == true ? "alert alert-danger" : "alert alert-success"} 
            role="alert"
            >
            {status.message}
          </span>
        )}
        <button type="submit" className="btn btn-success">Cadastrar</button>
      </form>
    </section>
  )
}