export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("`${API_BASE_URL}/api/products`")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert("Erro ao buscar produtos: " + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return;
    <div>
      <h2>Produtos</h2>
      <p>Carregando...</p>
    </div>;
  }

  return (
    <div>
      <h2>Produtos</h2>
      <ul className="list">
        {products.map((id, name, price, description) => (
          <li key={id}>
            <p>
              #{id} {name}
            </p>
            <p className="price">R$ {price.toFixed(2)}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
