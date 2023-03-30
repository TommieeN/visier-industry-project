import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      NAV BAR
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Page1">Page 1</Link>
        </li>
        <li>
          <Link to="/Page2">Page 2</Link>
        </li>
        <li>
          <Link to="/Page3">Page 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
