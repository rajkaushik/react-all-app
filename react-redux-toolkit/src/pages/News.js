import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { addFavorite, removeFavorite } from "../redux/favSlice";

const News = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allNews, setAllNews] = useState([]);
  const [error, setError] = useState();
  const [searchBox, setSearchBox] = useState("");
  const [param, setParam] = useState({});
  const [isListView, setIsListView] = useState(true);
  const [detail, setDetail] = useState(false);

  const endPointUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=ded5ec91c8254187a2135a0757174bd3";

  let favValue = useSelector((state) => state.favorite);

  const addFavoriteHandler = (item, id) => {
    item.id = id;
    dispatch(addFavorite(item));
  };

  const viewDetailsHandle = (item) => {
    setIsListView(false);
    setDetail(item);
  };

  const handleSearch = () => {
    setParam({
      ...param,
      q: searchBox,
    });

    fetchNews(endPointUrl, param);
  };

  const fetchNews = (url, param) => {
    axios
      .get(url, param)
      .then((res) => {
        if (res.status == 200) {
          setAllNews(res.data.articles);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchNews(endPointUrl);
  }, []);

  return (
    <>
      <div className="container">
        {isListView ? (
          <div className="row justify-content-md-center">
            <div className="col-md-3 mt-2">
              <input
                type="text"
                name="searchField"
                onChange={(e) => setSearchBox(e.target.value)}
                className="form-control"
                value={searchBox}
                aria-describedby="basic-addon2"
                placeholder="type here for search..."
              />
              <button
                onClick={handleSearch}
                className="btn btn-outline-secondary mt-1"
                type="button"
              >
                Search
              </button>
              {JSON.stringify(favValue.favorites.length)}
            </div>

            <div className="col-md-9 mt-2 news-list-wrap">
              <div className="row">
                {allNews?.map((item, index) => {
                  let id = uuidv4();
                  return (
                    <div className="col-md-4 mb-3" key={id}>
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
                            onClick={viewDetailsHandle.bind(this, item)}
                            className="btn btn-primary btn-sm"
                          >
                            Read More..
                          </button>
                          <button
                            onClick={addFavoriteHandler.bind(this, item, id)}
                          >
                            Favorite
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-12 mt-5 news-details">
            <button onClick={() => setIsListView(true)}>Go Back</button>
            <h3>{detail.title}</h3>
            <p>Author: {detail.author}</p>
            <p>
              <img src={detail.urlToImage} alt="" />
            </p>
            <p>{detail.content}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default News;
