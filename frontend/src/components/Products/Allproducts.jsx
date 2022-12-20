import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../store/reducers/productReducer";
import "./Allproducts.css";
import Footer from "../Footer/Footer";

function headerTitle(category) {
  switch (category) {
    case "jewelry":
      return "Jewelry & Accessories";
    case "holiday_shop":
      return "Holiday Shop";
    case "clothing_shoes":
      return "Clothing & Shoes";
    case "home_living":
      return "Home Living";
    case "wedding_party":
      return "Wedding & Party";
    case "toys":
      return "Toys";
    case "art":
      return "Art & Collectibles";
    default:
      return;
  }
}

export default function AllProducts() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => Object.values(state.products));

  const handleClick = () => {
    history.push(`/products/jewelry/1`);
  };

  const handleClick1 = () => {
    history.push(`/products/jewelry/3`);
  };

  const handleClick2 = () => {
    history.push(`/products/jewelry/4`);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="homepage">
      <div className="productHeaderContainer">
        <ul className="header">
          <div className="headerText">
            <h1 className="headerTitle">{headerTitle(category)}</h1>
            <p className="headerDescription">
              Necklaces, bracelets, earrings, and rings to complete your look or
              wow them with a perfect gift
            </p>
          </div>

          <li className="headerImages" onClick={handleClick}>
            <img src="/img/earring.png" />
            <span className="headerText1">Earrings</span>
          </li>
          <li className="headerImages" onClick={handleClick1}>
            <img src="/img/necklace1.png" />
            <span className="headerText2">Necklaces</span>
          </li>
          <li className="headerImages" onClick={handleClick1}>
            <img src="/img/ring1.png" />
            <span className="headerText3">Rings</span>
          </li>
          <li className="headerImages" onClick={handleClick2}>
            <img src="/img/bracelet.png" />
            <span className="headerText4">Bracelets</span>
          </li>
          <li className="headerImages" onClick={handleClick1}>
            <img src="/img/bag.png" />
            <span className="headerText5">Bags & Purses</span>
          </li>
          <li className="headerImages" onClick={handleClick1}>
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
      <Footer />
    </div>
  );
}
