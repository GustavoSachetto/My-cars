import { useEffect, useState } from "react"
import api from "../../../../services/api"

export default function SelectCarmodel({name, brand, ...rest}) {
  const [loading, setLoading] = useState(true)
  const [carmodels, setCarmodels] = useState([])

  useEffect(() => {   
    const route = brand == null || brand == undefined ? "/carmodels" : `/carmodels/brand/${brand}`

    api.get(route).then((response) => {
      setCarmodels(response.data)
      setLoading(false)
    })
  }, [brand])

  return (
    <select 
      id={name}
      name={name}
      className="form-select"
      {...rest}
    >
      <option value="">Todos</option>
      {!loading && (
          Array.isArray(carmodels) && carmodels.length > 0 && carmodels.map((value) => (
            <option value={value.id} key={value.id}>{value.name}</option>
          )
        )
      )}
    </select>
  )
}