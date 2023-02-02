import { NavbarComponent } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartContainer from "./components/CartContainer/CartContainer"



function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
      <Routes>
        <Route exact path={"/"} element={<ItemListContainer />}/>
        <Route exact path={"/producto/:id"} element={<ItemDetailContainer/>}/>  
        <Route exact path={"/:categoryId"} element={<ItemListContainer/>}/>  
        <Route exact path={"/carrito"} element={<CartContainer/>}/>  
      </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
