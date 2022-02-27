import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="light-green accent-3">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Food
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <a href="https://github.com/AndrewHelix/Food">GIT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
