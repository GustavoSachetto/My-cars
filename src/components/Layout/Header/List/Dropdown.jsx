export default function Dropdown({ label, children }) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        { label }
      </a>
      <ul className="dropdown-menu">
        { children }
      </ul>
    </li>
  )
}