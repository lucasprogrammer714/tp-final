import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Checkout from "./components/pages/checkout/Checkout";
import NavBar from "./components/layout/navbar/NavBar";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Cart from "./components/pages/cart/Cart";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
