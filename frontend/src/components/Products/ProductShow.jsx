import { useHistory, useParams } from "react-router-dom";
import "./ProductShow.css";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/reducers/productReducer";
import Footer from "../Footer/Footer";
import { addItemToCart } from "../../store/reducers/cartReducer";
import { csrfFetch } from "../../store/csrf";

function formatPrice(price) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default function ProductShow() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [count, setCount] = useState(1);
  const { category, productId } = useParams();
  const userId = useSelector((state) => state.user.current);
  const [showDescription, setShowDescription] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  // const carts = useSelector((state) => Object.values(state.carts));

  useEffect(() => {
    csrfFetch("/api/cart")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  const product = {
    id: 1,
    name: "Sleek Steel Bench",
    price: 10000,
    description:
      "Sometimes people jot down pseudo-code on paper. If that pseudo-code runs directly on their computers, its best, isn't it? Ruby tries to be like that, like pseudo-code that runs. Python people say that too.",
    seller: {
      id: 1,
      email: "user@gmail.com",
      firstName: "user",
      createdAt: "2022-12-08T15:57:02.121Z",
    },
    category: { id: 3, name: "clothing_shoes", label: "Clothing \u0026 Shoes" },
    images: [
      "/img/necklace.png",
      "/img/necklace2.png",
      "/img/necklace3.png",
      "/img/necklace4.png",
      "/img/necklace5.png",
      "/img/necklace6.png",
    ],
  };

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    if (userId) {
      dispatch(addItemToCart(32, productId, 1)).then(() => {
        history.push("/cart");
      });
    } else {
      history.push("/");
    }
    setCount(1);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSwitchImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrev = () => {
    let index;
    if (currentImageIndex === 0) {
      index = product.images.length - 1;
    } else {
      index = currentImageIndex - 1;
    }
    setCurrentImageIndex(index);
  };
  const handleNext = () => {
    let index;
    if (currentImageIndex === product.images.length - 1) {
      index = 0;
    } else {
      index = currentImageIndex + 1;
    }

    setCurrentImageIndex(index);
  };

  if (!product) {
    return <div>NOT FOUND!</div>;
  }

  return (
    <>
      <div className="productIndexContainer">
        <div className="listingPageContainer">
          <div className="listingPageImage">
            <div className="carouselItems">
              <ul className="carouselItemsList">
                <li
                  className="carouselItem1"
                  role="button"
                  onClick={() => handleSwitchImage(0)}
                >
                  <img src="/img/necklace.png" />
                </li>
                <li
                  className="carouselItem"
                  role="button"
                  onClick={() => handleSwitchImage(1)}
                >
                  <img src="/img/necklace2.png" />
                </li>
                <li
                  className="carouselItem"
                  role="button"
                  onClick={() => handleSwitchImage(2)}
                >
                  <img src="/img/necklace3.png" />
                </li>
                <li
                  className="carouselItem"
                  role="button"
                  onClick={() => handleSwitchImage(3)}
                >
                  <img src="/img/necklace4.png" />
                </li>
                <li
                  className="carouselItem"
                  role="button"
                  onClick={() => handleSwitchImage(4)}
                >
                  <img src="/img/necklace5.png" />
                </li>
                <li
                  className="carouselItem2"
                  role="button"
                  onClick={() => handleSwitchImage(5)}
                >
                  <img src="/img/necklace6.png" />
                </li>
              </ul>
            </div>

            <div className="innerContainer">
              <button className="arrowButton" onClick={handlePrev}>
                <span className="navArrow">
                  <IoIosArrowBack />
                </span>
              </button>

              <div className="imagesContainer">
                <img src={product.images[currentImageIndex]} />
              </div>

              <button className="arrowButton" onClick={handleNext}>
                <span className="navArrow">
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>

          <div className="rightContainer">
            <h2 className="itemName">{product.name}</h2>
            <p className="itemPrice">{formatPrice(product.price)}</p>

            <p className="itemQty">Quantity</p>
            <select
              className="optionBar"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>

            <div>
              <button
                className="AddCartButton"
                // type="submit"
                onClick={handleClick}
              >
                Add to Cart
              </button>
              <div>
                <button
                  onClick={() => setShowDescription((prev) => !prev)}
                  className="description"
                >
                  <div className="descriptionTab">
                    <span className="descriptionTitle">Description</span>
                    <span className="arrowDownButton">
                      <IoIosArrowDown />
                    </span>
                  </div>
                </button>

                {showDescription && (
                  <p className="descriptionContent">{product.description}</p>
                )}
              </div>
              <div>
                <button
                  onClick={() => setShowShipping((prev) => !prev)}
                  className="shipping"
                >
                  <div className="shippingTab">
                    <span className="shippingTitle">
                      Shipping and return policies
                    </span>
                    <span className="arrowDownButton">
                      <IoIosArrowDown />
                      {/* <CartModal/> */}
                    </span>
                  </div>
                </button>
              </div>

              {showShipping && (
                <div className="returnContainer">
                  <div className="returnStatus">
                    <p className="returnText">Returns & exchanges</p>
                    <p className="returnText2">Accepted</p>
                  </div>
                  <div className="returnDuration">
                    <p className="returnText">Returns & exchnages window</p>
                    <p className="returnText2">30 days</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
