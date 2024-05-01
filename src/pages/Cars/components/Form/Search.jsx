import SelectFuel from "../../../../components/Layout/Form/SelectFuel"
import SelectBrand from "../../../../components/Layout/Form/SelectBrand"
import SelectCarmodel from "../../../../components/Layout/Form/SelectCarmodel"
import SelectTransmission from "../../../../components/Layout/Form/SelectTransmission"

export default function Search({ values, onChange, onSubmit }) {
  return (
    <form className="card px-3 py-4 rounded-4 border-0 shadow-sm" onSubmit={(e) => onSubmit(e)}>
      <h2 className="card-title mb-3">Buscar</h2>
      <fieldset className="row g-2 mb-3">

        <div className="col">
          <label htmlFor="version" className="form-label">Versão</label>
          <input 
            id="version" 
            type="text" 
            name="version" 
            className="form-control"
            placeholder="1.4 Ltz 5p" 
            onChange={onChange}
          />
        </div>

        <div className="col">
          <label htmlFor="fuel" className="form-label">Combustível</label>
          <SelectFuel 
            name="fuel" 
            onChange={onChange} 
          />
        </div>

        <div className="col">
          <label htmlFor="brand" className="form-label">Marca</label>
          <SelectBrand 
            name="brand" 
            onChange={onChange} 
          />
        </div>

        <div className="col">
          <label htmlFor="carmodel" className="form-label">Modelo</label>
          <SelectCarmodel 
            name="carmodel" 
            brand={values.brand_id} 
            onChange={onChange} 
          />
        </div>

        <div className="col">
          <label htmlFor="transmission" className="form-label">Transmissão</label>
          <SelectTransmission 
            name="transmission" 
            onChange={onChange} 
          />
        </div>

        <div className="col">
          <label htmlFor="pricemin">Preço</label>
          <div className="input-group mt-2">
            <input 
              id="pricemin"
              type="number" 
              name="pricemin"
              step={0.01}
              max={values.pricemax}
              className="form-control"
              placeholder="Min"
              onChange={onChange}
            />
            <input 
              id="pricemax"
              type="number" 
              name="pricemax"
              step={0.01}
              min={values.pricemin}
              className="form-control"
              placeholder="Max"
              onChange={onChange}
            />
          </div>
        </div>

      </fieldset>
      <button type="submit" className="btn btn-secondary">Buscar</button>
    </form>
  )
}