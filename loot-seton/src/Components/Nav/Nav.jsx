import { Link } from "react-router-dom";

const Nav = () => {
  //hold links to allow for moving between pages
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
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