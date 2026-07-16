import withDataFetching from "../DataFetchingClassComponent";
import ProductItem from "../ProductItem";

const ProductsList = ({ data: products }) => {
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
};

const ProductsListWithData = withDataFetching(
  "Products",
  ProductsList,
  "./api/products",
);
export default ProductsListWithData;
