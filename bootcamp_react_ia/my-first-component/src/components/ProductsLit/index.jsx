export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

  }, []);
    

  return (
    <div>
      <h2>Produtos</h2>
      <ul className="list">
        <li>
          <p>#123 Nome do Produto</p>
          <p className="price">R$ 100,00</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </li>
      </ul>
    </div>
  );
}
