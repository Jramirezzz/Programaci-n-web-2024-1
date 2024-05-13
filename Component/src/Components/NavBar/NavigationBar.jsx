import './NavigationBar.css'
import { Link } from "react-router-dom";


export function NavigationBar() {

  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Favorites">Favorites</Link></li>
    </ul>
    </>
  )
}


