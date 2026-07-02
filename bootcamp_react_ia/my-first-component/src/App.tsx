import "./App.css";
import Item from "./Item";

function App() {
  return (
    <div className="list">
      <h1>Itens para colocar na mala</h1>
      <Item name="Camisa" check />
      <Item name="Calça" />
      <Item name="Tênis" check />
      <Item name="Meias" check />
      <Item name="Chinelo" />
    </div>
  );
}

export default App;