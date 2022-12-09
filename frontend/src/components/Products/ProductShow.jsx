import { useParams } from "react-router-dom";
import "./ProductShow.css";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/reducers/productReducer";

function formatPrice(price) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default function ProductShow() {
  const dispatch = useDispatch();
  const { category, productId } = useParams();
  const product = useSelector((state) => state.products[productId]);
  const [showDescription, setShowDescription] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    //move to cart
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
                <li className="carouselItem1">
                  <img src="/img/necklace.png" />
                </li>
                <li className="carouselItem">
                  <img src="/img/necklace2.png" />
                </li>
                <li className="carouselItem">
                  <img src="/img/necklace3.png" />
                </li>
                <li className="carouselItem">
                  <img src="/img/necklace4.png" />
                </li>
                <li className="carouselItem">
                  <img src="/img/necklace5.png" />
                </li>
                <li className="carouselItem2">
                  <img src="/img/necklace6.png" />
                </li>
              </ul>
            </div>

            <div className="innerContainer">
              <button className="arrowButton">
                <span className="navArrow">
                  <IoIosArrowBack />
                </span>
              </button>

              <div className="imagesContainer">
                <img src="/img/necklace.png" />
              </div>
              <button className="arrowButton">
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
                type="submit"
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
                  <span className="shippingTitle">Shipping and return policies</span>
                  <span className="arrowDownButton">
                    <IoIosArrowDown />
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
                    <p className="returnText2" >30 days</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
