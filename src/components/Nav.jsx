import { NavLink } from "react-router-dom";
// Nav Component for browsing different categories
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/birds">Birds</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
