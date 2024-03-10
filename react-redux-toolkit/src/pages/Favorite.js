import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favSlice";

const Favorite = () => {
  const fav = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  const removeFavHandler = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-12 mt-2 news-fav-wrap">
          <div className="row">
            {fav?.map((item, index) => {
              return (
                <div className="col-md-3 mb-3" key={index}>
                  <div className="card news-card">
                    <img
                      className="card-img-top"
                      src={item.urlToImage}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-desc">{item.description}</p>
                      <p className="card-price">{item.author}</p>
                      <button
                        onClick={removeFavHandler.bind(this, item.id)}
                        className="btn btn-primary btn-sm"
                      >
                        Remove From Favorite
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
  );
};

export default Favorite;
