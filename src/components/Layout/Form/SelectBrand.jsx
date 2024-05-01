import { useEffect, useState } from "react"
import api from "../../../services/api"

export default function SelectBrand({name, ...rest}) {
  const [loading, setLoading] = useState(true)
  const [brands, setBrands] = useState([])

  useEffect(() => {
    api.get("/brands").then((response) => {
      setBrands(response.data)
      setLoading(false)
    })
  }, [])

  return (
    <select 
      id={name}
      name={name}
      className="form-select"
      {...rest}
    >
      <option value="">Todas</option>
      {!loading && (
          Array.isArray(brands) && brands?.map((value) => (
            <option value={value.id} key={value.id}>{value.name}</option>
          )
        )
      )}
    </select>
  )
}