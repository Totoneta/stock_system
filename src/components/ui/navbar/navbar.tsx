import { Link } from "react-router-dom";
import Logo from '@/assets/react.svg'
import "@/styles/components/ui/navbar.css"

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <img className="logonavbar" src={Logo} alt="" />
        </div>
        <ul className="listnavbar">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/productos">Productos</Link></li>
        </ul>
      </nav>
    </header>
  );
}
