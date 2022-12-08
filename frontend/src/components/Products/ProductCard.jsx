import { AiOutlineStar } from "react-icons/ai";


export default function ProductCard({ product }) {
  return (
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
  );
}
