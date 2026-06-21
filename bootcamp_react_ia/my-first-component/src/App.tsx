import './App.css';

interface StepProps {
  step: number;
  instruction: string;
}

function Step({ step, instruction }: StepProps) {
  return (
    <li>Passo {step}: {instruction}</li>
  );
}

function App() {
  return (
    <>
      <h1>Estrutura de um componente</h1>
      <ul>
        <Step step={1} instruction="Criar uma função do componente" />
        <Step step={2} instruction="Definir as props do componente" />
        <Step step={3} instruction="Implementar a lógica do componente" />
      </ul>
    </>
  );
}

export default App;
