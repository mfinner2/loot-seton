import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/new">New Note</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

//<Link to="/">Home</Link>
//<Link to="/new">New Note</Link>