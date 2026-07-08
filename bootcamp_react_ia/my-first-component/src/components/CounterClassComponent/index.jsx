

class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { message } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <h2>{count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Adicionar
        </button>
      </div>
    );
  }
}

export default CounterClassComponent;