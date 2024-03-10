import { Link } from "react-router-dom";

const Header = () => {
  const logoutHandle = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <nav className="navbar navbar-expand bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            News App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favorite" className="nav-link">
                  Favorite
                </Link>
              </li>
            </ul>
            <div className="float-end">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/login" className="dropdown-item nav-link">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="dropdown-item nav-link">
                        Register
                      </Link>
                    </li>
                    <li>
                      <button onClick={logoutHandle} className="dropdown-item">
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link float-end">
                    <span className="fas fa-shopping-cart cart-icon">
                      <span></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
