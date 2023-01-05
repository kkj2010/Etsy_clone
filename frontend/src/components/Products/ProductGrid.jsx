import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <ul className="productLists">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
