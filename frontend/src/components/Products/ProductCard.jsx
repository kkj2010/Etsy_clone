import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  // console.log(product);
  return (
    <Link
      to={`/products/${product.category.name}/${product.id}`}
      className="productLink"
    >
      <li className="productImage">
        <img src="/img/necklace.png" />
        <div className="productName">{product.name}</div>
        <div className="productRating">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <div className="productPrice">${product.price / 100}</div>
        <div className="productSeller">{product.seller.firstName}</div>
      </li>
    </Link>
  );
}
