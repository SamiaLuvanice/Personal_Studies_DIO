export default function ProductItem({ product }) {
  return (
    <li>
      <p>
        #id{product.id} {product.name}
      </p>
      <p className="price">R$ {product.price.toFixed(2)}</p>
      <p>{product.description}</p>
    </li>
  );
}
