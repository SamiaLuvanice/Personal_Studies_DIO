import "./App.css";
import FancyText from "./components/FancyText";
import InspirationGenarator from "./components/InpirationGenerator";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
      <FancyText title text="Welcome to Fancy Text" />
      <InspirationGenarator>
        <Copyright year={2026} />
      </InspirationGenarator>
    </>
  );
}

export default App;