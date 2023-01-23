import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListConteiner/ItemListConteiner";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title="Titulo de Ecommerce" />
    </>
  );
}

export default App;
