import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../store/reducers/productReducer";
import "./Allproducts.css";

export default function AllProducts() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => Object.values(state.products));
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="homepage">
      <div className="productHeaderContainer">
        <ul className="header">
          <div className="headerText">
            <h1 className="headerTitle">Jewelry & Accessories</h1>
            <p className="headerDescription">
              Necklaces, bracelets, earrings, and rings to complete your look or
              wow them with a perfect gift
            </p>
          </div>

          <li className="headerImages">
            <img src="/img/earring.png" />
            <span className="headerText1">Earrings</span>
          </li>
          <li className="headerImages">
            <img src="/img/necklace1.png" />
            <span className="headerText2">Necklaces</span>
          </li>
          <li className="headerImages">
            <img src="/img/ring1.png" />
            <span className="headerText3">Rings</span>
          </li>
          <li className="headerImages">
            <img src="/img/bracelet.png" />
            <span className="headerText4">Bracelets</span>
          </li>
          <li className="headerImages">
            <img src="/img/bag.png" />
            <span className="headerText5">Bags & Purses</span>
          </li>
          <li className="headerImages">
            <img src="/img/acc.png" />
            <span className="headerText6">Accessories</span>
          </li>
        </ul>
      </div>

      <div className="itemDisplayContainer">
        <div className="itemDisplayTitle">
          <h1 className="displayLogoTitle">Find Something you love</h1>
        </div>
        <div className="filterButtons">
          <button type="submit" className="arrivalButton">
            Esitmated Arrival
          </button>
          <button type="submit" className="filterButton">
            All Filters
          </button>
        </div>

        <ul className="productLists">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
