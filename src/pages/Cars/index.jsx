import { useState } from "react"
import Cars from "./components/Card/Cars"
import FormSearch from "./components/Form/Search"

export default () => {
  const [values, setValues] = useState({})
  const [search, setSearch] = useState({})

  function onChange(event) {
    const { value, name } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  function onSubmit(e) {
    e.preventDefault()
    setSearch(values)
  }

  return (
    <article className="d-flex flex-column justify-content-center mt-2 px-4 py-5">
      <section>
        <FormSearch 
          values={values}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </section>
      <section className="d-flex flex-wrap justify-content-between mt-5">
        <Cars filters={search} />
      </section>
    </article>
  )
}