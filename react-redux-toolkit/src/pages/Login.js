import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import "dotenv/config";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/login/users", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/news");
      })
      .catch((err) => {
        setError(err.message);
        navigate("/login");
      });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6 mt-5">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <hr />
            <form onSubmit={loginUser}>
              <div className="row">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
            {error.length > 0 ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
