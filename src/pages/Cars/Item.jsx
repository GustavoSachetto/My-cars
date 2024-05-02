import { useState, useEffect } from "react"
import CarItem from "./components/Card/CarItem/CarItem"
import { useParams } from "react-router-dom"
import api from "../../services/api"

export default function Item() {
  const [car, setCar] = useState()
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    api.get(`/cars/${id}`).then((response) => {
      setCar(response.data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  return (
    <article className="mt-2 p-5 d-flex justify-content-center">
     {loading ? (
        <div className="d-flex align-items-center">
          <span className="spinner-border spinner-border-sm me-2" role="status" />
          <span className="fs-5 fw-light">Carregando informações...</span>
        </div>
      ) : (car != undefined ? (
          <CarItem car={car} />
        ) : (
          <span className="fs-5 fw-light">Nenhum veículo encontrado.</span>
        )
      )}
    </article>
  )
}