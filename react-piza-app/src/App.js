import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import IsAuthenticated from "./components/IsAuthenticated";
import Cart from "./pages/Cart";
import "./App.css";
import CartContext from "./AppContext";
import cartReducer, { initialState } from "./AppReducer";
import { useReducer } from "react";

function App() {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route element={<IsAuthenticated />}>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
