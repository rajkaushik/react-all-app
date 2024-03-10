import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header";
import News from "./pages/News";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Favorite from "./pages/Favorite";
import NoPage from "./pages/NoPage";
// import IsAuthenticated from "./components/IsAuthenticated";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/news" element={<News />} />
          {/* <Route element={<IsAuthenticated />}>
            <Route path="/news" element={<Products />} />
          </Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
