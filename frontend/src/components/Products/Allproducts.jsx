import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../store/reducers/productReducer";
import "./Allproducts.css";
import Footer from "../Footer/Footer";
import ProductGrid from "./ProductGrid";

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

function subTitle(category) {
  switch (category) {
    case "jewelry":
      return "Necklaces, bracelets, earrings, and rings to complete your look or wow them with a perfect gift";
    case "holiday_shop":
      return "Gift of all kinds, for all kinds. Find something magical for every meaningful person on your list.";
    case "clothing_shoes":
      return "All things wonderful and wearable for men, women, kids, and even little bitty babies";
    case "home_living":
      return "Kitchen and dining, storage solutions, rugs, lighting, wall decor, and furniture—everything you need to make your home yours";
    case "wedding_party":
      return "From thoughtful invitations to unique decorations—find everything you need for an unforgettable occasion";
    case "toys":
      return "Toys, puzzles, games, and more fun-filled finds for kids of all age";
    case "art":
      return "Custom artwork, portraits, and totally original paintings and prints to turn your home into a gallery";
    default:
      return;
  }
}

export default function AllProducts() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) =>
    Object.values(state.products).filter(
      (product) => product.category.name === category
    )
  );

  // const handleClick = () => {
  //   history.push(`/products/jewelry/1`);
  // };

  // const handleClick1 = () => {
  //   history.push(`/products/jewelry/3`);
  // };

  // const handleClick2 = () => {
  //   history.push(`/products/jewelry/4`);
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="homepage">
      <HeaderCategory category={category} />

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
        <ProductGrid products={products} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function HeaderCategory({ category }) {
  const products = {
    jewelry: [
      { id: 1, label: "Earrings", imageURL: "/img/earring.png" },
      {
        id: 2,
        label: "Necklaces",
        imageURL: "/img/jewelry12-1.png",
      },
      { id: 3, label: "Rings", imageURL: "/img/ring1.png" },
      { id: 4, label: "Bracelets", imageURL: "/img/bracelet.png" },
    ],
    holiday_shop: [
      { id: 1, label: "Holiday Stockings", imageURL: "/img/holiday9-1.png" },
      {
        id: 3,
        label: "Holiday Cards",
        imageURL: "/img/holiday6-1.png",
      },
      {
        id: 2,
        label: "Holiday Decor",
        imageURL: "/img/item24.png",
      },
    
    ],
    clothing_shoes: [
      { id: 1, label: "Dresses", imageURL: "/img/item15.png" },
      {
        id: 2,
        label: "Jackets",
        imageURL: "/img/clothing3-1.png",
      },
    ],
    home_living: [
      { id: 1, label: "Kitchen & Dining", imageURL: "/img/item6.png" },
      {
        id: 2,
        label: "Lighting",
        imageURL: "/img/item1.png",
      },
      { id: 3, label: "Home Decor", imageURL: "/img/deco11.png" },
      { id: 4, label: "Furniture", imageURL: "/img/deco7.png" },
    ],
    wedding_party: [
      { id: 1, label: "Party Supplies", imageURL: "/img/party6-1.png" },
      {
        id: 2,
        label: "Invitations & Paper",
        imageURL: "/img/deco4.png",
      },
    ],
    toys: [
      { id: 1, label: "Toys & Games", imageURL: "/img/toys5-1.png" },
      {
        id: 2,
        label: "Gifts",
        imageURL: "/img/deco5.png",
      },
    ],
    art: [
      { id: 1, label: "Candle", imageURL: "/img/deco6.png" },
      {
        id: 2,
        label: "Sculpture",
        imageURL: "/img/love.png",
      },
    ],
  };

  const history = useHistory();
  const handleClick = (category, productId) => {
    history.push(`/products/${category}/${productId}`);
  };

  return (
    <div className="productHeaderContainer">
      <ul className="header">
        <div className="headerText">
          <h1 className="headerTitle">{headerTitle(category)}</h1>
          <p className="headerDescription">{subTitle(category)}</p>
        </div>
        {products[category].map((product) => (
          <li
            key={product.id}
            className="headerImagesNew"
            onClick={() => {
              handleClick(category, product.id);
            }}
          >
            <img src={product.imageURL} alt={product.label} />
            <span className="headerNewText">{product.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
