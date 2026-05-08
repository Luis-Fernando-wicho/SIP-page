import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const selectPage = ({ isActive }) =>
    "navBar__link" + (isActive ? " navBar__link_active" : "");
  return (
    <nav className="navBar">
      <NavLink to="/ElectricalProjects" className={selectPage}>
        PROYECTOS ELECTRICOS
      </NavLink>
      <NavLink to="/Automation" className={selectPage}>
        AUTOMATIZACION
      </NavLink>
      <NavLink to="/SecurityCameras" className={selectPage}>
        CAMARAS DE SEGURIDAD
      </NavLink>
      <NavLink to="/SolarPanels" className={selectPage}>
        PANELES SOLARES
      </NavLink>
    </nav>
  );
}

export default NavBar;
