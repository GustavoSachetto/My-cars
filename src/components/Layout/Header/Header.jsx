import { Link } from "react-router-dom"
import Dropdown from "./List/Dropdown"
import LinkItem from "./List/Item/LinkItem"
import DropdownItem from "./List/Item/DropdownItem"
import DropdownLine from "./List/Item/DropdownLine"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={"navbar navbar-expand-lg bg-dark bg-gradient shadow-sm "+`${styles.nav}`}>
      <div className={"container-fluid "+`${styles.container}`}>

        <Link to="/" className="navbar-brand fs-4 fw-medium text-warning ">My-cars</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse justify-content-between "+`${styles.menu}`} id="navbarSupportedContent">
          <ul className="navbar-nav nav-underline">
            <Dropdown label="Veículo">
              <DropdownItem to="/cars">Buscar</DropdownItem>
              <DropdownItem to="/cars/new">Cadastrar</DropdownItem>
              <DropdownItem to="/cars/edit">Editar</DropdownItem>
              <DropdownLine />
              <DropdownItem to="/cars/delete">Deletar</DropdownItem>
            </Dropdown>

            <Dropdown label="Marca">
              <DropdownItem to="/brands/new">Cadastrar</DropdownItem>
              <DropdownItem to="/brands/edit">Editar</DropdownItem>
              <DropdownLine />
              <DropdownItem to="/brands/delete">Deletar</DropdownItem>
            </Dropdown>

            <Dropdown label="Transmissão">
              <DropdownItem to="/transmissions/new">Cadastrar</DropdownItem>
              <DropdownItem to="/transmissions/edit">Editar</DropdownItem>
              <DropdownLine />
              <DropdownItem to="/transmissions/delete">Deletar</DropdownItem>
            </Dropdown>

            <Dropdown label="Combustível">
              <DropdownItem to="/fuels/new">Cadastrar</DropdownItem>
              <DropdownItem to="/fuels/edit">Editar</DropdownItem>
              <DropdownLine />
              <DropdownItem to="/fuels/delete">Deletar</DropdownItem>
            </Dropdown>

            <Dropdown label="Modelos">
              <DropdownItem to="/carmodels/new">Cadastrar</DropdownItem>
              <DropdownItem to="/carmodels/edit">Editar</DropdownItem>
              <DropdownLine />
              <DropdownItem to="/carmodels/delete">Deletar</DropdownItem>
            </Dropdown>
          </ul>
          <ul className="navbar-nav">
            <LinkItem to="/about">Sobre</LinkItem>
            <LinkItem to="/favorites">Favoritos</LinkItem>
            <LinkItem to="/login" className="nav-link fw-medium text-light border border-white mx-2 px-4 rounded-5">Login</LinkItem>
          </ul>
        </div>
      </div>
    </header>
  )
}