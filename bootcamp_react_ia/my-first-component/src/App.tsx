import "./App.css";
import Item from "./Item";

const itemsList = [
  { id: 1, name: "Meias", check: true, count: 2 },
  { id: 2, name: "Camisetas", check: false, count: 3 },
  { id: 3, name: "Calças", check: true, count: 1 },
  { id: 4, name: "Tênis", check: false, count: 0 },
  { id: 5, name: "Chinelo", check: true, count: 2 }
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