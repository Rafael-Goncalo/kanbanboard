import { Link } from 'react-router-dom'
import logo from '../assets/img/kanban-selected.png'

export const Navbar = () => {
  return (
    <nav>
        <Link to ="/"><h1>Kanban Board</h1></Link>
       
        <Link to ="/"><img src={logo} alt="" /></Link>
    </nav>
  )
}
