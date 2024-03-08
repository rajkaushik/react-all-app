import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import CartContext from "../AppContext";

const Header = () => {
  const cartContext = useContext(CartContext);
  let cartLength = cartContext?.cartState?.length;
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizza App
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
                <Link to="/products" className="nav-link">
                  products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="nav-link">
                  Logout
                </button>
              </li>
            </ul>
            <Link to="/cart" className="nav-link float-end">
              <span className="fas fa-shopping-cart cart-icon">
                <span>{cartLength}</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
