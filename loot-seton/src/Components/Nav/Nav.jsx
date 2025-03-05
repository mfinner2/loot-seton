import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="/new">New Note</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

//<Link to="/">Home</Link>
//<Link to="/new">New Note</Link>