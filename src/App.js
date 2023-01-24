import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App(props) {
  return (
    <>
      <Navbar />
      <ItemListContainer title="Titulo de Ecommerce" />
    </>
  );
}

export default App;
