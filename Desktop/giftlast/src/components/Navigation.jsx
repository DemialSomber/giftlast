import { NavLink } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Main from "./pages/Main";
import Special from "./pages/Special";

function Navigation() {
  return (
    <header>
      <nav>
        <NavLink to="." element={<Main />} end>
          <div className="link">Главная</div>
        </NavLink>
        <NavLink to="/special" element={<Special />}>
          <div className="link">Специальные предложения</div>
        </NavLink>
        <NavLink to="about" element={<About />}>
          <div className="link">О нас</div>
        </NavLink>
        <NavLink to="contacts" element={<Contacts />}>
          <div className="link">Контакты</div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
