import "./css/main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header"
import NotFound from "./components/NotFound"
import { ItemListContainer } from "./components/ItemListContainer"
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import { CartProvider } from "./components/context/CartContext";
import { ClasesCondicionales } from "./components/ClasesCondicionales";
import { Suma } from "./components/Suma";
import { Checkout } from "./components/Checkout";
import { CargarProductos } from "./components/CargarProductos";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/clases" element={<ClasesCondicionales condicion={true}/>}/>
          <Route path="/suma" element={<Suma/>}/>
          <Route path="/finalizar-compra" element={<Checkout/>}/>
          <Route path="/cargar-productos" element={<CargarProductos/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App