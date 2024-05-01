import { Link } from "react-router-dom"

export default function LinkItem({ to, children, className }) {
  return (
    <li className="nav-item">
      <Link to={ to } className={className ?? "nav-link text-light mx-2"}>
        { children }
      </Link>
    </li>
  )
}