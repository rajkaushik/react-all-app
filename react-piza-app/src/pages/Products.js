import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config";
import axios from "axios";
import { useContext } from "react";
import CartContext from "../AppContext";

const Products = () => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const [products, setProducts] = useState([]);

  const handleAdd = (item) => {
    item["quantity"] = 1;
    cartContext.dispatch({ type: "ADD", payload: item });
  };

  useEffect(() => {
    axios
      .get(`${config.jsonServer.baseUrl}${config.jsonServer.products}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-12 mt-5">
            <div className="row">
              {products.map((item, index) => {
                return (
                  <div className="col-md-3 mb-3" key={index}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={item.image}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-des">{item.description}</p>
                        <p className="card-price">{item.price}</p>
                        <button
                          onClick={handleAdd.bind(this, item)}
                          className="btn btn-primary btn-sm"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
