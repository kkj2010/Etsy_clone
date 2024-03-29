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
import Reviews from "./Reviews";
import { formatPrice } from "../../utils/formatPrice";
import { AuthModal } from "../AuthModal";

export default function ProductShow() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [count, setCount] = useState(1);
  const { category, productId } = useParams();
  const userId = useSelector((state) => state.user.current);
  const [showDescription, setShowDescription] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const product = useSelector((state) => state.products[productId]);
  const [modalOpen, setModalOpen] = useState(false);
  const handleToggleModal = (e) => {
    e?.preventDefault();
    setModalOpen((prev) => !prev);
  };


  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    console.log(productId)
    if (userId) {
      dispatch(addItemToCart(productId, parseInt(selected))).then(() => {
        history.push("/cart");
      });
    } else {
      // history.push("/");
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
      index = product.photos.length - 1;
    } else {
      index = currentImageIndex - 1;
    }
    setCurrentImageIndex(index);
  };
  const handleNext = () => {
    let index;
    if (currentImageIndex === product.photos.length - 1) {
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
          <div className="imageAndReview">
            <div className="listingPageImage">
              <div className="carouselItems">
                <ul className="carouselItemsList">
                  {product.photos.map((photo, index) => (
                    <li
                      key={index}
                      className="carouselItem"
                      role="button"
                      onClick={() => handleSwitchImage(index)}
                    >
                      <img src={photo.url} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="innerContainer">
                <button className="arrowButton" onClick={handlePrev}>
                  <span className="navArrow">
                    <IoIosArrowBack />
                  </span>
                </button>

                <div className="imagesContainer">
                  <img src={product.photos[currentImageIndex].url} />
                </div>

                <button className="arrowButton" onClick={handleNext}>
                  <span className="navArrow">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </div>
            <Reviews reviews={product?.reviews || []} />
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
                  <option key={index} className="op">{option}</option>
                ))}
            </select>

            <div>
              <button className="AddCartButton" onClick={userId? handleClick: handleToggleModal}>
                Add to cart
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
        {modalOpen && (
        <AuthModal onClose={handleToggleModal} onSuccess={handleToggleModal} />
      )}
      </div>
      {/* <Footer /> */}
    </>
  );
}
