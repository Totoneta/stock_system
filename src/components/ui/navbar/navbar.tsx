import { Link } from "react-router-dom";
import "@/styles/components/ui/navbar.css"

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <svg className="menuiconnavbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5 6h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m-4 5h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m-4 5h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2" />
          </svg>

        </div>
        <ul className="listnavbar">
          <li>
            <Link to="/">
              <svg
                className="iconnavbar"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m3 11l7.671-6.819a2 2 0 0 1 2.658 0L21 11m-2-1.778V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9.222"
                />
              </svg>Inicio</Link>
          </li>
          <li>
            <Link to="/productos">
              <svg
                className="iconnavbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8h5c1 0 1.857.857 2 2l1 8c.133 1.062-.336 2-1 2H5c-.664 0-1.133-.938-1-2l1-8c.143-1.143 1-2 2-2zM8 8a4 4 0 1 1 8 0" />
              </svg>
              Productos</Link>
          </li>
          <li>
            <Link to="/productos">
              <svg
                className="iconnavbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5V3h6l2 5l-3 3l5 5l3-3l5 2v6h-2C10.163 21 3 13.837 3 5" />
              </svg>
              Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
