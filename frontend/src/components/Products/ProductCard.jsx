import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.category.name}/${product.id}`}
      className="productLink"
    >
      <li className="productImage">
        <img src={product.photos?.[0]?.url ?? "/img/necklace.png"} alt="" />
        <div className="productName">{product.name}</div>
        <div className="productRating">
          <Rating rating={product.rating} />
        </div>
        <div className="productPrice">${(product.price / 100).toFixed(2)}</div>
        <div className="productSeller">{product.seller.firstName}</div>
      </li>
    </Link>
  );
}
