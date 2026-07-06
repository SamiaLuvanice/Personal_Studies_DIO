import "./App.css";
import Item from "./Item";

const itemsList = [
  { id: 1, name: "Meias", check: true },
  { id: 2, name: "Camisetas", check: false },
  { id: 3, name: "Calças", check: true },
  { id: 4, name: "Tênis", check: false },
  { id: 5, name: "Chinelo", check: true }
];

function App() {
  return (
    <div className="list">
      <h1>Itens para colocar na mala</h1>
      {itemsList.map((item) => {
       
        return <Item key={item.id} name={item.name} check={item.check} />;
      })}
    </div>
  );
}

export default App;