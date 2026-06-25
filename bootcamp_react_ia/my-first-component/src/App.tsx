import "./App.css";
import { Button } from "./components/Button";
import { SwitchThemeButton } from "./components/SwitchThemeButton";

function App() {

  const handleHoursClick = () => {
    const currentTime = new Date();
    alert(`Agora são ${currentTime.getHours()}:${currentTime.getMinutes()}`);
  }

  return (
    <>
    <h3>Switch Theme Button</h3>
    <SwitchThemeButton theme="light">☀️</SwitchThemeButton>
    <SwitchThemeButton theme="dark">🌙</SwitchThemeButton>
    <Button onClick={handleHoursClick}> Que horas são? </Button>
    </>
  );
}

export default App;