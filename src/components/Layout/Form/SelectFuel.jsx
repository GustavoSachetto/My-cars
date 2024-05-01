import { useEffect, useState } from "react"
import api from "../../../services/api"

export default function SelectFuel({name, ...rest}) {
  const [loading, setLoading] = useState(true)
  const [fuels, setFuels] = useState([])

  useEffect(() => {
    api.get("/fuels").then((response) => {
      setFuels(response.data)
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
      <option value="">Todos</option>
      {!loading && (
          Array.isArray(fuels) && fuels?.map((value) => (
            <option value={value.id} key={value.id}>{value.name}</option>
          )
        )
      )}
    </select>
  )
}