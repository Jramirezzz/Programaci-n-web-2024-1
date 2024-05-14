import './NavigationBar.css'
import { Link } from "react-router-dom";


export function NavigationBar() {

  return (
    <>
    <div className='border'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Favorites">Favorites</Link></li>
    </ul>
    </div>
    </>
  )
}


