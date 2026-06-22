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

const stepsInstructions = [
  "Criar uma função do componente",
  "Definir as props do componente",
  "Implementar a lógica do componente",
  "Retornar o JSX do componente"
];

function App() {
  const steps = [];
  for (let i = 0; i < stepsInstructions.length; i++) {
    steps.push(
      <Step key={i} step={i + 1} instruction={stepsInstructions[i]} />
    );
  }

  return (
    <>
      <h1>Estrutura de um componente</h1>
      <ul>
        {steps}
      </ul>
    </>
  );
}

export default App;
