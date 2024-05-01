import { Link } from "react-router-dom"

export default function DropdownItem({ to, children }) {
  return (
    <li>
      <Link to={ to } className="dropdown-item">
        { children }
      </Link>
    </li>
  )
}