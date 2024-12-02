import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import NavBar from "./components/layout/navbar/NavBar";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Cart from "./components/pages/cart/Cart";

function App() {
  return (
    <div>

      <BrowserRouter>
      <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<ItemDetail/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
