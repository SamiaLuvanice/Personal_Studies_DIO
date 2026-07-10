import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config";
import ProductItem from "../ProductItem";

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
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
