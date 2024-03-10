import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

let initialState = {
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  password: "",
  city: "",
};
const Registration = () => {
  const navigate = useNavigate();
  const [fields, setField] = useState(initialState);
  const [error, setError] = useState("");
  const fieldChange = (event) => {
    setField({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/register/users", fields)
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6 mt-5">
            <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
            <hr />
            <form onSubmit={registerUser}>
              <div className="row">
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    onChange={(event) => fieldChange(event)}
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={fields.firstname}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    onChange={(event) => fieldChange(event)}
                    className="form-control"
                    name="lastname"
                    value={fields.lastname}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    type="text"
                    onChange={(event) => fieldChange(event)}
                    className="form-control"
                    name="mobile"
                    value={fields.mobile}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(event) => fieldChange(event)}
                    className="form-control"
                    name="email"
                    value={fields.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={fields.password}
                    onChange={(event) => fieldChange(event)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    onChange={(event) => fieldChange(event)}
                    className="form-control"
                    name="city"
                    value={fields.city}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Register
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

export default Registration;
