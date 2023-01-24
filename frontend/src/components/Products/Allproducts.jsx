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
      <HeaderCategory category={category} />
      {/* <div className="productHeaderContainer">
        <ul className="header">
          <div className="headerText">
            <h1 className="headerTitle">{headerTitle(category)}</h1>
            <p className="headerDescription">{subTitle(category)}</p>
          </div>
          <li className="headerImagesNew" onClick={handleClick}>
            <img src="/img/earring.png" />
            <span className="headerNewText">Earrings</span>
          </li> */}
      {/* <li className="headerImages" onClick={handleClick}>
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
          </li> */}
      {/* </ul>
      </div> */}

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

        {/* <ul className="productLists">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul> */}
        <ProductGrid products={products} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function HeaderCategory({ category }) {
  // const products = [
  //   { id: 1, label: "Earrings", imageURL: "/img/earring.png" },
  //   {
  //     id: 2,
  //     label: "Necklaces",
  //     imageURL: "/img/necklace1.png",
  //   },
  //   { id: 3, label: "Rings", imageURL: "/img/ring1.png" },
  //   { id: 4, label: "Bracelets", imageURL: "/img/bracelet.png" },
  // ];

  const products = {
    jewelry: [
      { id: 1, label: "Earrings", imageURL: "/img/earring.png" },
      {
        id: 2,
        label: "Necklaces",
        imageURL: "/img/necklace1.png",
      },
      { id: 3, label: "Rings", imageURL: "/img/ring1.png" },
      { id: 4, label: "Bracelets", imageURL: "/img/bracelet.png" },
    ],
    holiday_shop: [
      { id: 1, label: "Earrings", imageURL: "/img/earring.png" },
      {
        id: 2,
        label: "Necklaces",
        imageURL: "/img/necklace1.png",
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

        {/* <li className="headerImages" onClick={handleClick}>
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
    </li> */}
      </ul>
    </div>
  );
}
