import { useEffect, useState } from "react"
import api from "../../../../services/api"

export default function SelectTransmission({name, ...rest}) {
  const [loading, setLoading] = useState(true)
  const [transmissions, setTransmissions] = useState([])

  useEffect(() => {
    api.get("/transmissions").then((response) => {
      setTransmissions(response.data)
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
          Array.isArray(transmissions) && transmissions.length > 0 && transmissions.map((value) => (
            <option value={value.id} key={value.id}>{value.name}</option>
          )
        )
      )}
    </select>
  )
}