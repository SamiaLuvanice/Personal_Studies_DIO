const CounterFunctionalComponent = ({ message }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{message}</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Adicionar</button>
    </div>
  );
};

export default CounterFunctionalComponent;