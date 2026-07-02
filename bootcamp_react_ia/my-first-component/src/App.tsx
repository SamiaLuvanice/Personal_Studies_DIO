import "./App.css";
import Item from "./Item";

function App() {
  return (
    <div className="list">
      <h1>Itens para colocar na mala</h1>
      <Item name="Camisa" quantity={2} />
      <Item name="Calça" quantity={1} />
      <Item name="Tênis" quantity={1} />
    </div>
  );
}

export default App;