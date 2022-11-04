import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [state, setState] = useState(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <nav className=".container-fluid" data-testid="nav">
      <h3>Toolhub</h3>
      <div>
        <ul id="nav-list" className={state ? "#nav-list active" : "#nav-list"}>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={handleState}>
        <i id="bar" aria-hidden="false" className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
