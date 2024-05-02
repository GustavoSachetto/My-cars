import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../../../../services/api"
import styles from "./Cars.module.css"
import QueryString from "qs"

function initialStatus() {
  return {error: false, message: ''}
}

export default function Cars({ filters }) {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(initialStatus)
  const navigate = useNavigate()
  
  useEffect(() => {
    setLoading(true)
    setCars([])

    api.get("/cars", {
      params: filters,
      paramsSerializer: params => {
        return QueryString.stringify(params)
      }
    }).then((response) => {
      setCars(response.data.vehicles)
      setLoading(false)
    }).catch((response) => {
      setError({error: true, message: response.response.data.error})
      setLoading(false)
    })
  }, [filters])

  return (
    <>
     {loading ? (
        <div className="d-flex align-items-center">
          <span className="spinner-border spinner-border-sm me-2" role="status" />
          <span className="fs-5 fw-light">Carregando informações...</span>
        </div>
      ) : (
        Array.isArray(cars) && cars.length > 0 ? (
          cars.map((car) => (
            <div 
              onClick={() => {navigate(`/cars/${car.id}`)}} 
              className={"card mb-4 border-0 rounded-4 "+`${styles.card}`}
              key={car.id}
            >
              <img src={car.images[0]} 
                className={"card-img-top object-fit-cover rounded-top-4 shadow-sm "+`${styles.card_img}`}
                alt={car.version} 
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title fw-semibold">
                  {car.brand_name +" "+ car.model_name}
                </h5>
                <h6 className="card-subtitle mb-3 fw-normal">
                  {car.version}
                </h6>
                <p className="card-text fs-5 text-success fw-medium">
                  <span>
                    {car.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                  </span>
                </p>
                <ul className="list-group list-group-horizontal">
                  <li className={"list-group-item "+`${styles.card_li}`}>
                    <span>
                      {car.year.production}/{car.year.release}
                    </span>
                  </li>
                  <li className={"list-group-item "+`${styles.card_li}`}>
                    <span>
                      {car.fuel_name}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <span className="fs-5 fw-light">{error.message}</span>
        )
      )}
    </>
  )
}